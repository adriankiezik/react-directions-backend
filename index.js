const http = require("http");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const findGeolocation = require("./routes/findGeolocation");
const calculatePrice = require("./routes/calculatePrice");

const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);

app.use(cors());

app.use("/find", findGeolocation);
app.use("/costs", calculatePrice);

server.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});
