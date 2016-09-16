'use strict'
const path = require('path')
const config = require('./config')

const _ = module.exports = {}

_.cssLoader = config.cssModules ?
  'style-loader!css-loader?-autoprefixer&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' :
  'style-loader!css-loader?-autoprefixer!postcss-loader'

_.outputPath = config.electron ?
  path.join(__dirname, '../app/dist') :
  path.join(__dirname, '../dist')

_.outputIndexPath = config.electron ?
  path.join(__dirname, '../app/dist/index.html') :
  path.join(__dirname, '../dist/index.html')

_.target = config.electron ?
  'electron-renderer' :
  'web'
