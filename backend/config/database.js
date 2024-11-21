const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('CIMEF', 'postgres', 'Eudis', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize