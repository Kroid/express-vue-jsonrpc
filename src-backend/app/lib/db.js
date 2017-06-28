const env = process.env.NODE_ENV || 'development'
const config = require('../../config/database.json')[env]

const options = {
    promiseLib: require('bluebird')
}

const pgp = require('pg-promise')(options);
const db = pgp(config)

module.exports = db
