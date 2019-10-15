const axios = require('axios')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', async (req, res) => {

        const { data } = await axios.get('http://localhost:8082')
        
        Atendimento.lista(res, data)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
       const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    }) 

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}