const router = require('express').Router();
const { Transaction } = require('../../models')

router.get('/', async (req, res) =>{
    try {
        const transactions = await Transaction.findAll();

        res.status(200).json(transactions)
    } catch (err) {
        res.status(500).json({error: err})
    }
})


module.exports = router;