const fs = require('fs')

const codificaBase64 = caminhoDoArquivo => {
    const bitmap = fs.readFileSync(caminhoDoArquivo)

    return new Buffer(bitmap).toString('base64')
}

module.exports = codificaBase64
