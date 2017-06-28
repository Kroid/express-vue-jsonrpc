const Joi = require('joi');

const schema = Joi.any()

function run(params) {
  return new Promise((resolve, reject) => {
    reject(null);
  });
}

module.exports = {
  schema: schema,
  run: run,
};
