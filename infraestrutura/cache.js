const memcached = require('memcached')

const novoClient = () => new memcached('localhost:11211', {
  retries: 10,
  retry: 10000,
  remove: true
})

module.exports = () => novoClient