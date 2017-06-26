const validateParams = require('./validate-params');

class API {
  constructor() {
    this.operations = {}
  }

  call(operationName, params) {
    let operation = this.operations[operationName]

    if (operation.schema) {
      let errors = validateParams(params, operation.schema);
      if (errors) {
        return new Promise((resolve, reject) => reject(errors))
      }
    }

    return this.operations[operationName].run(params)
  }

  docs() {
    return Object.keys(this.operations).map((name) => {
      return {
        name: name,
        schema: this.operations[name].schema,
      }
    })
  }

  registerOperation(name, operation) {
    this.operations[name] = operation
  }
}

module.exports = API
