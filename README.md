.
________________________________________
🧾 Student Registration Form (Node.js + MongoDB)
📘 Overview
This project is a simple student registration form built using HTML, CSS, Node.js, Express, and MongoDB.
It allows users to enter their details — registration number, name, branch, email, password, confirm password, and phone number — and stores them in a MongoDB database.
After successful submission, a success page displays all the entered data except the password for security reasons.
________________________________________
🚀 Features
✅ User-friendly form interface with validation
✅ Client-side and server-side validation
✅ Password confirmation check
✅ Data storage in MongoDB
✅ Clean success page (password hidden)
✅ Organized code structure
________________________________________
🧰 Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js, Express.js
Database	MongoDB
Environment	VS Code / Terminal
________________________________________
📁 Folder Structure
Student-Form/
│
├── form.html          # Registration form (frontend)
├── form.css           # Styles for the form
├── server.js          # Express server and MongoDB integration
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
________________________________________
⚙ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/srsurendar12/student-form.git
cd student-form
2️⃣ Install dependencies
Make sure Node.js is installed, then run:
npm install express mongoose
3️⃣ Start MongoDB
If using local MongoDB:
mongod
4️⃣ Run the server
node server.js
5️⃣ Open in browser
Visit:
http://localhost:3019
________________________________________
🧩 Form Fields
Field	Type	Validation
Registration Number	Text	Required, alphanumeric
Name	Text	Required
Branch	Dropdown	Must select
Email	Email	Must be valid email
Password	Password	Minimum 6 characters
Confirm Password	Password	Must match password
Phone	Number	10 digits required
________________________________________
📦 MongoDB Schema
const userSchema = new mongoose.Schema({
  regd_no: String,
  name: String,
  branch: String,
  email: String,
  password: String,
  phone: String
});
________________________________________
🎯 Success Page
After submitting the form, a success page appears showing:
✅ Form Submitted Successfully
Registration No: 1234
Name: John Doe
Branch: CSE
Email: johndoe@gmail.com
Phone: 9876543210
(Password is hidden for security reasons)
________________________________________
🛠 Future Improvements
•	Encrypt password before saving (using bcrypt)
•	Add login/authentication system
•	Add database validation for duplicate registration numbers or emails
•	Use environment variables for MongoDB connection
