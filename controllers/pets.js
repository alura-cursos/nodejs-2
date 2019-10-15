const fs = require('fs')

module.exports = app => {
  app.post('/pet/image', (req, res) => {
    console.log('recebendo imagem')

    const nomeArquivo = req.headers.filename
    
    req.pipe(fs.createWriteStream(`/assets/${nomeArquivo}`))
      .on('finish', () => {
        console.log('arquivo escrito')
        res.status(201).send('ok')
      })
  })
}
