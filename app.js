const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config({
  path: "config/.env",
});

app.use("/test", (req, res) => {
  res.send("Hello World");
});

app.use("/api", require("./Routes/user"));

module.exports = app;
