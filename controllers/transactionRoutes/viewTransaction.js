const router = require('express').Router();
const { Transaction } = require('../../models')

router.get('/', async (req, res) =>{
    try {
        const transactions = await Transaction.findAll({
            order: [['timestamp', 'DESC']]
    });

        res.status(200).json(transactions)
    } catch (err) {
        res.status(500).json({error: err})
    }
})

router.get('/balance', async (req, res) => {
    try {
        const transactionList =await Transaction.findAll()

        const filteredResults = transactionList.map(({payer, points}) => ({
            [payer]: points
        }))
        
        res.status(200).json(filteredResults)
    } catch (err) {
        res.status(500).json({error: err})
    }
})

module.exports = router;