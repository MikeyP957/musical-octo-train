
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection')

class Transaction extends Model {}

Transaction.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        payer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { 
        sequelize,
        timestamps:true,
        createdAt:true,
        updatedAt: true 
    }
);

module.exports = Transaction