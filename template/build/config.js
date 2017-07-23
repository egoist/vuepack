'use strict'
const pkg = require('../package')

module.exports = {
  title: '{{name}}',
  // Options for webpack-dev-server
  // See https://webpack.js.org/configuration/dev-server
  devServer: {
    host: 'localhost',
    port: 4000
  },
  // when you use electron please set to relative path like ./
  // otherwise only set to absolute path when you're using history mode
  publicPath: '{{#if electron}}.{{/if}}/',{{#if electron}}
  electron: true,{{/if}}{{#if jsx}}
  cssModules: true,
  jsx: true{{/if}}
}
