const router = require("express").Router();
const { Transaction } = require("../../models");
const { spendPoints } = require("../../services/helpers");

router.put("/", async (req, res) => {
  try {
    let pointsToSpend = req.body.points;

    const orderedTransactions = await Transaction.findAll({
      order: [["timestamp", "ASC"]],
    });

    const [updatedList, changes] = spendPoints(
      pointsToSpend,
      orderedTransactions
    );

    for (const updateTransaction of updatedList) {
      await Transaction.update(
        { points: updateTransaction.points },
        {
          where: {
            id: updateTransaction.id,
          },
        }
      );
    }

    res.status(200).json(changes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
