'use strict'
const path = require('path')
const server = require('webpack-hot-server')
const config = require('./webpack.config.dev')

const port = process.env.NODE_PORT || 3030
server({
  port,
  customIndex: path.join(process.cwd(), 'build'),
  config
}).then(() => {
  console.log(`Running at http://localhost:${port}`)
})
