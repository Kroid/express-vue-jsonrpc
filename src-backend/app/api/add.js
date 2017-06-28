const Joi = require('joi');

const schema = Joi.array().items(Joi.number()).required()

function run(params) {
  return new Promise((resolve, reject) => {
    let result = 0
    params.map((ele) => result += ele)

    resolve(result);
  });
}

module.exports = {
  schema: schema,
  run: run,
};
