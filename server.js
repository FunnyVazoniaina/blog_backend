const express = require("express");
require("dotenv").config();

//Initialize the express application
const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

//Defining routes
app.get("/", (req, res) => {
  res.send("Welcome to the Blog Backend!");
});