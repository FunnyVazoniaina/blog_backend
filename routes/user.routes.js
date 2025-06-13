const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const { registerUser, loginUser } = require("../controllers/auth.controller");

//Defining route for registration
router.post("/register", registerUser);
//Defining route for user Login
router.post("/login", loginUser);

module.exports = router;