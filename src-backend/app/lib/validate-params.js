const Joi = require('joi');
const objectPath = require("object-path");

module.exports = function(params, schema) {
  let options = { abortEarly: false };
  let result = Joi.validate(params, schema, options);
  let errors = objectPath.get(result, 'error.details');
  return errors;
};
