'use strict'

module.exports = {
  port: 4000,
  vendor: [
    'vue',
    'vue-router',
    'vuex'
  ],
  cssModules: true,{{#if electron}}
  electron: true,{{/if}}{{#if jsx}}
  jsx: true{{/if}}
}
