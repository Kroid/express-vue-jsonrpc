const api = require('../api')

module.exports = function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  let data = req.body

  let promise = api.call(data.method, data.params)
  if (!data.id) return res.end()

  promise
  .then((resp) => {
    let result = {
      id: data.id,
      result: resp,
    }
    res.status(200).end(JSON.stringify(result))
  })
  .catch((err) => {
    let result = {
      id: data.id,
      error: err,
    }
    res.status(500).end(JSON.stringify(result))
  })
}
