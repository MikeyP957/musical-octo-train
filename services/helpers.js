module.exports = {
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

  spendPoints: (spendPoints, transactions) => {
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
  },
};
