const API = require('../lib/api')

var api = new API()

api.registerMethod('add', require('./add'))
api.registerMethod('registerUser', require('./register-user'))

module.exports = api
