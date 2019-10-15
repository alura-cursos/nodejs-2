const express = require('express')
const bodyparser = require('body-parser')

const app = new express();
const faker = require('faker')

app.use(bodyparser());

app.get('/:cpf', (req, res) => {
  const { cpf } = req.body
  res.status(200).json({
    cpf,
    nome: faker.name.findName(),
    dataDeNascimento: faker.date.past(),
    cpf: context.request.query.cpf || cpfString.join('')
  })
});

app.listen(8082, () => console.log('Api rodando'));