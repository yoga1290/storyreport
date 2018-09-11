const dev = require('./config.dev.json')
const prod = require('./config.prod.json')

module.exports = (process.env.NODE_ENV === 'production') ? prod:dev
