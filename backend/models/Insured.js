const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Insured = new sequelize.define('Insured', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    birthDay: { type: DataTypes.DATE },
    linksParent: { type: DataTypes.STRING }, // Lien avec un souscripteur
    subscriberId: { type: DataTypes.UUID, allowNull: false, references: { model: 'Subscriber', key: 'id' } }
})

module.exports = Insured