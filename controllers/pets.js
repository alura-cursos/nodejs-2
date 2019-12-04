const Pet = require('../models/pets')

module.exports = app => {
    app.post('/pet', (req, res) => {
        const { nome, imagem } = req.body

        Pet.adiciona(nome, imagem, res)
    })
}
