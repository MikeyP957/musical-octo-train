const router = require("express").Router();
const { Transaction } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const points = req.body.points;

    if (points >= 0) {
      const newTransaction = await Transaction.create({
        ...req.body,
      });
      res.status(200).json(newTransaction);
    } else {
      res.status(400).json({
        error: "Points must be greater than 0 when adding a transaction",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
