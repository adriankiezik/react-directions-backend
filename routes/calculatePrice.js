const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let pricePerKm = req.query.priceperkm;
  let distanceInKm = req.query.distance;

  if (pricePerKm == null || distanceInKm == null) {
    return;
  }

  pricePerKm = +decodeURI(pricePerKm);
  distanceInKm = +decodeURI(distanceInKm);

  const amountOfDays = Math.floor(distanceInKm / 800);

  // Convert to number with 2 decimal numbers.
  const totalPrice =
    +(distanceInKm * pricePerKm + 1000 * amountOfDays).toFixed(2) * 1.1;

  res.json({ totalPrice });
});

module.exports = router;
