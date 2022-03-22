
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

router.post('/', async (req, res) => {
    try {
        const { body } = req;
        const points = body.points;

        if(points >= 0) {
            const newTransaction = await Transaction.create({
                ...req.body
            })
            res.status(200).json(newTransaction)
        } else {
            res.status(400).json({error: 'Points must be greater than 0 when adding a transaction'})
        }

    } catch (err) {
        res.status(500).json({error: err})
    }
})

router.put('/spend', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json({error: err})
    }
})

module.exports = router;