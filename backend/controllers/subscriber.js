const { Subscriber } = require('../models/Subscriber')

// Ajouter un souscripteur
module.exports.addSubscriber = async (req, res) => {
    const { first_name, last_name, email, phone, address, birthday } = req.body

    // Vérification des champs obligatoires
    if (!first_name || !last_name || !email || !phone || !address || !birthday) {
        return res.status(400).json({ message: "Tous les champs sont obligatoires" })
    }

    try {
        const subscriber = await Subscriber.create({
            first_name,
            last_name,
            email,
            phone,
            address,
            birthday
        })

        res.status(201).json({ message: "Souscripteur créé avec succès", subscriber })
    }
    catch(err) {
        res.status(500).json({ message: "Erreur survenue lors de l'ajout du souscripteur", err })
    }
}

// Rechercher un souscripteur
module.exports.searchSubscriber = async (req, res) => {

}