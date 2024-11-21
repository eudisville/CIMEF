const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Emission = new sequelize.define('Emission', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    contratNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
    EmissionDate: { type: DataTypes.STRING, allowNull: false },
    prime: { type: DataTypes.DECIMAL, allowNull: false },
    insuredAmount: { type: DataTypes.DECIMAL, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'actif' },
    subscriberId: { type: DataTypes.UUID, allowNull: false, references: { model: 'Subscriber', key: 'id' } }
})

module.exports = Emission