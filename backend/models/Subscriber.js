const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Subscriber = new sequelize.define('Subscriber', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true},
    phone: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING } ,
    birthDay: { type: DataTypes.DATE },

    // Lié à un utilisateur qui est souscripteur dans un contrat
    userId: { type: DataTypes.UUID, allowNull: false, references: { model: 'User', key: 'id' } }
})

// Relation avec les contrats

module.exports = Subscriber