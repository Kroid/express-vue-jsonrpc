const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 8080

const isProd = env === 'production'

const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser');
const { createBundleRenderer } = require('vue-server-renderer')

function createRenderer() {
  const _createRenderer = function(bundle, options) {
    const template = fs.readFileSync('./src-frontend/index.html', 'utf-8')

    return createBundleRenderer(bundle, Object.assign(options, {
      template,
      runInNewContext: false,
    }))
  }

  return new Promise((resolve, reject) => {
    if (isProd) {
    } else {
      require('./build/setup-dev-server')(app, (bundle, options) => {
        resolve(_createRenderer(bundle, options))
      })
    }
  })
}

function createRequestHandler(cb) {
  createRenderer().then((renderer) => {
    const handler = function(req, res) {
      const context = { url: req.url }
      renderer.renderToString(context, (err, html) => {
        if (err) {
          if (err.code === 404) return res.status(404).end('Page not found')
          if (err.code === 500) return res.status(500).end('Internal server error')
        }

        res.setHeader("Content-Type", "text/html")
        res.end(html)
      })
    }

    cb(handler)
  })
}


const app = express()

createRequestHandler((handler) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/api.json', require('./src-backend/controllers/http'));
  app.get('*', handler)

  app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
  })
})
