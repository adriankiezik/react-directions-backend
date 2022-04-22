const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config");

router.get("/", async (req, res) => {
  if (req.query.search == null) {
    res.status(400).json({ error: "You need to provide search query!" });
    return;
  }

  const query = encodeURI(req.query.search);
  const url =
    config.LocationIqApiUrl +
    "?key=" +
    process.env.LOCATIONIQ_API_KEY +
    "&q=" +
    query +
    "&format=json";

  const response = await axios.get(url).catch((error) => {
    res.status(502).json({ error: error });
    return;
  });

  const { lat, lon, display_name } = response.data[0];

  res.json({ lat, lon, name: display_name });
});

module.exports = router;
