const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

//Initialize the express application
const app = express();

// Middleware to set security headers
app.use(helmet());

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware to parse URL-encoded bodies like form submissions
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

//Connect to MongoDB
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

//Defining routes
app.use("/api/users", userRoutes);
