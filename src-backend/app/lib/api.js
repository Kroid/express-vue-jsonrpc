const validateParams = require('./validate-params');

class API {
  constructor() {
    this.methods = {}
  }

  call(methodName, params) {
    let method = this.methods[methodName]

    if (method.schema) {
      let errors = validateParams(params, method.schema);
      if (errors) {
        return new Promise((resolve, reject) => reject(errors))
      }
    }

    return this.methods[methodName].run(params)
  }

  docs() {
    return Object.keys(this.methods).map((name) => {
      return {
        name: name,
        schema: this.methods[name].schema,
      }
    })
  }

  registerMethod(name, method) {
    this.methods[name] = method
  }
}

module.exports = API
