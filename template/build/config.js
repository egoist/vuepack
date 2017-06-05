'use strict'
const pkg = require('../package')

module.exports = {
  port: 4000,
  title: '{{name}}',
  // when you use electron please set to relative path like ./
  // otherwise only set to absolute path when you're using history mode
  publicPath: '{{#if electron}}.{{/if}}/',{{#if electron}}
  electron: true,{{/if}}{{#if jsx}}
  cssModules: false,
  jsx: true{{/if}}
}
