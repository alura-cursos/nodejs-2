const fs = require('fs')

fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
    console.log('imagem foi bufferizada')

    fs.writeFile('./assets/salsicha2.jpg', buffer, erro => {
        console.log('imagem foi escrita')
    })
})
