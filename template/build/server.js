'use strict'
const fs = require('fs')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.dev')
{{#electron}}
const fse = require('fs-extra')
{{/electron}}

const app = express()

const port = 4000

config.entry.client = [
  `webpack-hot-middleware/client{{#electron}}?path=http://localhost:${port}/__webpack_hmr{{/electron}}`,
  config.entry.client
]
{{#electron}}

config.output.publicPath = `http://localhost:${port}/assets/`
{{/electron}}

const compiler = webpack(config)

const devMiddleWare = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})
app.use(devMiddleWare)
app.use(require('webpack-hot-middleware')(compiler))

const mfs = devMiddleWare.fileSystem
const file = path.join(config.output.path, '../index.html')
{{#electron}}
devMiddleWare.waitUntilValid(() => {
  const html = mfs.readFileSync(file)
  fse.ensureDirSync(path.dirname(file))
  fs.writeFile(file, html, 'utf8', err => {
    if (err) console.log(err)
  })
})
{{/electron}}
{{#unless electron}}
app.get('*', (req, res) => {
  devMiddleWare.waitUntilValid(() => {
    const html = mfs.readFileSync(file)
    res.end(html)
  })
})
{{/unless}}

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
