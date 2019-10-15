const axios = require('axios')

class Cliente {
  buscaPorNome(nome) {
    return axios.get(`http://localhost:8082/${nome}`)
      .then(data => data.data)
  }
}

module.exports = new Cliente
