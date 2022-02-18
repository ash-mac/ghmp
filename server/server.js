const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");

require("dotenv").config();

const app = express();
app.use(express.json()); // To accept json data

connectDB(); //connects to the db

app.get("/", (req, res) => {
  res.send("You just hitted the API");
});
const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`My app is running ${PORT}`.yellow.bold));
