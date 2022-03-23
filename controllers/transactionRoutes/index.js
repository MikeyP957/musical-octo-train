const router = require("express").Router();
const addTransactions = require("./addTransaction");
const spendPoints = require("./spendPoints");
const viewTransactions = require("./viewTransaction");

router.use("/view", viewTransactions);
router.use("/add", addTransactions);
router.use("/spend", spendPoints);

module.exports = router;
