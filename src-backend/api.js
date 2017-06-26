const API = require('./lib/api')

var api = new API()

api.registerOperation('add', require('./operations/add'))

module.exports = api
