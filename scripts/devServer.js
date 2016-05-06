'use strict'
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const wrap = require('./wrap')
const config = require('./webpack.config.dev')

const app = express()

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

const dist = path.dirname(config.output.path)
devMiddleWare.fileSystem.mkdirpSync(config.output.path)

app.use(devMiddleWare)

app.use(require('webpack-hot-middleware')(compiler))

wrap(app)

app.get('*', (req, res) => {
  const fs = devMiddleWare.fileSystem
  devMiddleWare.waitUntilValid(() => {
    const fp = path.join(process.cwd(), 'build')
    const filename = 'index.html'
    const filepath = path.join(fp, filename)
    const contents = fs.readdirSync(dist)
    const exists = contents.indexOf(filename) !== -1
    if (exists) {
      res.end(fs.readFileSync(filepath))
    } else {
      res.end('Refresh when bundle is valid...')
    }
  })
})

const port = process.env.NODE_PORT || 3030
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})
