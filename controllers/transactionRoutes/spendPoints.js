const router = require("express").Router();
const { Transaction } = require("../../models");

/**
 *
 * @param {number} spendPoints
 * @param {Transaction[]} transactions
 * Spends points until they are gone
 * Transaction points are never negative
 *
 * Does not account for edge case where spendPoints is greater than accumulated points in transaction array
 * Does not sort transaction by date
 *
 * Returns an array with:
 *           the initial element the list updated data
 *           the second element the list of changes made
 */

const spendPoints = (spendPoints, transactions) => {
  const transactionList = transactions;
  let pointsToSpend = spendPoints;
  const changes = [];

  while (pointsToSpend > 0) {
    for (const transaction of transactionList) {
      if (transaction.points >= pointsToSpend) {
        changes.push({ payer: transaction.payer, points: 0 - pointsToSpend });
        transaction.points -= pointsToSpend;
        pointsToSpend -= pointsToSpend;
      } else {
        changes.push({
          payer: transaction.payer,
          points: 0 - transaction.points,
        });
        pointsToSpend -= transaction.points;
        transaction.points -= transaction.points;
      }
    }
  }
  return [transactionList, changes];
};

router.put("/", async (req, res) => {
  try {
    let pointsToSpend = req.body.points;

    const orderedTransactions = await Transaction.findAll({
      order: [["timestamp", "DESC"]],
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
