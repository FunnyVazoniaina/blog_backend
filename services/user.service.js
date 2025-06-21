const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Email validation function using regex
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

class UserService {
  static async registerUser(userData) {
    const { name, email, password } = userData;

    // Validate required fields
    if (!name || !email || !password) {
      throw new error("All fields are required");
    }

    // Validate email format
    if (!isValidEmail(email)) {
      throw new Error("Invalid email format");
    }
    // Validate password strength (at least 6 characters)
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists with this email");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return {
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      token,
    };
  }
  // Login user
  static async loginUser(userData) {
    const { email, password } = userData;

    if (!userData) {
      throw new Error("Email and password are required");
    }
    if (!isValidEmail(email)) {
      throw new Error("Invalid email format");
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found with this email");
    }
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
module.exports = UserService;
