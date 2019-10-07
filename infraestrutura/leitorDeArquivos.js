const fs = require('fs')

const leitor = fs.createReadStream('assets/salsicha.jpg')
  .pipe(fs.createWriteStream('assets/salsicha-stream.jpg'))
  .on('finish', () => console.log('arquivo escrito'))

module.exports = leitor