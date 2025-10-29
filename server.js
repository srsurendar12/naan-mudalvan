const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3019;

// Middleware
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/students')
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Schema
const userSchema = new mongoose.Schema({
  regd_no: String,
  name: String,
  branch: String,
  email: String,
  password: String,
  phone: String
});

// Model
const Users = mongoose.model("data", userSchema);

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/post', async (req, res) => {
  try {
    const { regd_no, name, branch, email, password, phone } = req.body;

    // Save to DB
    const user = new Users({ regd_no, name, branch, email, password, phone });
    await user.save();

    // Success Page (hide password)
    res.send(`
      <html>
      <head>
        <title>Success</title>
        <style>
          body {
            font-family: Arial;
            background-color: #1e1e1e;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .box {
            background: #333;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px #fff;
            text-align: left;
          }
          h2 { text-align: center; }
          p { margin: 8px 0; }
          a { color: #00bfff; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="box">
          <h2>✅ Form Submitted Successfully</h2>
          <p><strong>Registration No:</strong> ${regd_no}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Branch:</strong> ${branch}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><em>(Password is hidden for security reasons)</em></p>
          <br/>
          <a href="/">🔙 Go Back</a>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
