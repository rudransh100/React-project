require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ✅ HEALTH CHECK */
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

/* ✅ OPTIONAL: avoid 'Cannot GET /signup' in browser */
app.get("/signup", (req, res) => {
  res.send("Use POST request to signup");
});

app.get("/login", (req, res) => {
  res.send("Use POST request to login");
});

/* 🔗 CONNECT MONGODB */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo Error:", err));

/* 👤 USER SCHEMA */
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

/* 🟢 SIGNUP API */
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.json({ message: "Signup successful" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* 🔵 LOGIN API */
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.json({ message: "Wrong password" });
    }

    res.json({
      message: "Login success",
      user
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* 🚀 SERVER */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});