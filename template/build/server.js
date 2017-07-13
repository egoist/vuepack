'use strict'
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev')
const config = require('./config')

const app = express()

const port = config.port
webpackConfig.entry.client = [
  `webpack-hot-middleware/client?reload=true{{#electron}}&path=http://localhost:${port}/__webpack_hmr{{/electron}}`,
  webpackConfig.entry.client
]
{{#electron}}

webpackConfig.output.publicPath = `http://localhost:${port}/assets/`
{{/electron}}

let compiler

try {
  compiler = webpack(webpackConfig)
} catch (err) {
  console.log(err.message)
  process.exit(1)
}

const devMiddleWare = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: false,
  stats: {
    colors: true
  }
})
app.use(devMiddleWare)
app.use(require('webpack-hot-middleware')(compiler, {
  log: () => {}
}))

const mfs = devMiddleWare.fileSystem
const file = path.join(webpackConfig.output.path, 'index.html')

devMiddleWare.waitUntilValid()

app.get('*', (req, res) => {
  devMiddleWare.waitUntilValid(() => {
    const html = mfs.readFileSync(file)
    res.end(html)
  })
})

app.listen(port)
