module.exports = app => {
    app.post('/pet', (req, res) => {
        const { nome, imagem } = req.body

        res.status(201).send('OK')
    })
}
