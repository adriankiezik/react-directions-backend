const http = require("http");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get("/", (req, res) => {
  res.send("It's working!");
});

server.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});
