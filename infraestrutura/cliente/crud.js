const axios = require('axios')

class Cliente {
  buscaPorCpf(cpf) {
    return axios.get(`http://localhost:8082/${cpf}`)
      .then(data => data.data)
  }
}

module.exports = new Cliente
