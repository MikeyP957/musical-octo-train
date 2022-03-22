const sequelize = require('../config/connection')
const {Transaction} = require('../models')

const TransactionSeedData = require('./TransactionData.json')

const seedDataBase = async () => {
    await sequelize.sync({force: true});

    const transactions = await Transaction.bulkCreate(TransactionSeedData, {
        individualHooks: true,
        returning: true
    })

    process.exit(0);
}

seedDataBase();