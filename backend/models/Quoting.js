const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Quoting = new sequelize('Quoting', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    primeEstimate: { type: DataTypes.DECIMAL, allowNull: false },
    dateQuoting: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'En attente' },
    subscriberId: { type: DataTypes.UUID, allowNull: false, references: { model: 'Subscriber', key: 'id' } }
})

module.exports = Quoting