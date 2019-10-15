const express = require('express')
const bodyparser = require('body-parser')

const app = new express();
const faker = require('faker')

app.use(bodyparser());

app.get('/:nome', (req, res) => {
  const { nome }  = req.params
  const cpf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]
  const cpfString = cpf.map(() => faker.random.number(10))

  res.status(200).json({
    cpf: cpfString.join(),
    nome,
    dataDeNascimento: faker.date.past(),
  })
});

app.listen(8082, () => console.log('Api rodando'));
