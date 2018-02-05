const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')

const webpack = require('webpack')
const webpackConfig = require('./config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const TARGET_DIR = 'dist/'
const PORT = 3000

const app = express()

const compiler = webpack(webpackConfig)

// Sets JPM to dev environment?
// process.env.JPM_ENV = process.argv[2]

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
    reasons: false,
    chunks: false
  },
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use((req, res, next) => {
  res.sendFile(path.resolve(TARGET_DIR, 'index.html'))
})

app.use(express.static(TARGET_DIR))

app.listen(PORT, (error) => {
  if (error) throw error

  console.log('Server listening on port', PORT)
})
