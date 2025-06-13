const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
require("dotenv").config();

//Initialize the express application
const app = express();
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
