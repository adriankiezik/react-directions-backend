const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const pricePerKm = req.query.priceperkm;
  const distanceInKm = req.query.distance;

  const amountOfDays = Math.floor(distanceInKm / 800);

  // Convert to number with 2 decimal numbers.
  const totalPrice = +(distanceInKm * pricePerKm + 1000 * amountOfDays).toFixed(
    2
  );

  res.json({ totalPrice });
});

module.exports = router;
