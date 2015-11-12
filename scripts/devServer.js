var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.dev')

var app = express()
var compiler = webpack(config)
if (process.env.HOT) {
  // options for dev env
}

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../', 'index.hot.html'))
})

app.listen(3030, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:3030')
})
