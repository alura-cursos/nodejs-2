const query = require('../database/query')
const Cliente = require('../cliente/crud')

class Atendimento {
  adiciona(atendimento) {
    const sql = 'INSERT INTO Atendimentos SET ?'

   return query(sql, atendimento)
  }

  lista() {
    const sql = 'SELECT * FROM Atendimentos'
    return query(sql).then(atendimentos => {
      return atendimentos.map(async atendimento => {
        const cliente = await Cliente.buscaPorCpf(atendimento.cliente)
        const novoAtendimento = { ...atendimento, cliente }
        return novoAtendimento
      })
    })
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

    return query(sql)
      .then(atendimentos => atendimentos[0])
  }

  altera(id, valores) {
    const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

    return query(sql, [valores, id])
  }

  deleta(id) {
    const sql = 'DELETE FROM Atendimentos WHERE id=?'

    return query(sql, id)
  }
}

module.exports = new Atendimento
