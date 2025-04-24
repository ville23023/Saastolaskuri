const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const port = 3000;

connectDB();

app.use(express.json());
//API endpointit
app.use('', require('./api/user_profiles'));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
