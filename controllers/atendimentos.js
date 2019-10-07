const axios = require('axios')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', async (req, res) => {

        const { data } = await axios.get('http://localhost:8082')
        
        Atendimento.lista(res, data)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        const memcachedClient = app.infraestrutura.cache()
        
        memcachedClient.get(`atendimento-${id}`, (erro, data) => {
            if (err || !data) {
                console.log('MISS - chave não encontrada no cache');
                
                Atendimento.buscaPorId(id, res)
            } else {
                console.log(`HIT - valor: ${data}`);
                res.status(200).json(data)
            }
        })
        
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