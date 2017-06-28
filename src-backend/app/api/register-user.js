const Joi = require('joi')
const bcrypt = require('bcrypt')
const db = require('../lib/db')

const schema = Joi.object().required().keys({
  user: Joi.object().required().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
})

function run(params) {
  return createUser(params)
}


function createUser(params) {
  let saltRounds = 10
  let query = "INSERT INTO users(email, password_digest) VALUES(${email}, ${password_digest}) RETURNING id, email"

  return bcrypt.hash(params.user.password, saltRounds).then((passwordDigest) => {
    return {
      email: params.user.email,
      password_digest: passwordDigest,
    }
  }).then((queryParams) => {
    return db.one(query, queryParams)
  })
}


module.exports = {
  schema: schema,
  run: run,
};
