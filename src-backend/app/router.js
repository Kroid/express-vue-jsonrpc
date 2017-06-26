const bodyParser = require('body-parser')
const express = require('express')

const controller = require('./controllers/http')
const router = express.Router()

function defaultParamMiddleware(req, res, next) {
  if (!req.params.ext) req.params.ext = 'json'
  next()
}

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(defaultParamMiddleware)

router.post('/api\.:ext?', controller)

module.exports = router
