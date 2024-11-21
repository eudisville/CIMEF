const express = require('express')
const cors = require('cors')
const sequelize = require('./config/database')

const app = express()

app.use(cors())

// Database
const db_connection = async () => {
    try {
        await sequelize.authenticate()
        console.log('DB connected')

        await sequelize.sync({ force: false })
        console.log('Base de données synchronisée avec succès')
    }
    catch(err) {
        console.log('Erreur lor de la connexion avec la base de donnée', err)
    }
}

db_connection()

const PORT = process.env.PORT || 4001
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))