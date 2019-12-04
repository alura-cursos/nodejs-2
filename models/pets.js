const conexao = require('../infraestrutura/conexao')
const codificaBase64 = require('../arquivos/uploadDeArquivos')

class Pet {
    adiciona(nome, imagem, res) {
        const imagemBase64 = codificaBase64(imagem)

        const sql = 'INSERT INTO Pets SET ?'

        const pet = { nome, imagem: imagemBase64 }

        conexao.query(sql, pet, erro => {
            console.log(erro)
        })
    }
}

module.exports = new Pet()
