const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config");

router.get("/", async (req, res) => {
  const query = encodeURI(req.query.search);
  const url =
    config.LocationIqApiUrl +
    "?key=" +
    process.env.LOCATIONIQ_API_KEY +
    "&q=" +
    query +
    "&format=json";

  const response = await axios.get(url);
  const { lat, lon, display_name } = response.data[0];

  res.json({ lat, lon, name: display_name });
});

module.exports = router;
