const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.query.priceperkm == null || req.query.distance == null) {
    res.status(400).json({ error: "You need to provide valid search query!" });
    return;
  }

  let pricePerKm = req.query.priceperkm;
  let distanceInKm = req.query.distance;

  if (pricePerKm == null || distanceInKm == null) {
    res.status(400).json({ error: "You need to provide valid search query!" });
    return;
  }

  try {
    pricePerKm = +decodeURI(pricePerKm);
    distanceInKm = +decodeURI(distanceInKm);

    if (isNaN(pricePerKm) || isNaN(distanceInKm)) {
      res.status(500).json({
        error:
          "Couldn't calculate total price. Is price search param a number?",
      });
      return;
    }

    const amountOfDays = Math.floor(distanceInKm / 800);

    // Convert to number with 2 decimal numbers.
    const totalPrice = +(
      (distanceInKm * pricePerKm + 1000 * amountOfDays) *
      1.1
    ).toFixed(2);

    res.json({ totalPrice });
  } catch (err) {
    res.status(500).json({
      error: "Couldn't calculate total price. Is price search param a number?",
    });
  }
});

module.exports = router;
