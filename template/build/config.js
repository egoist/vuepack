'use strict'

module.exports = {
  port: 4000,
  title: '{{name}}',
  vendor: [
    'vue',
    'vue-router',
    'vuex'
  ],
  babel: {
    babelrc: false,
    presets: [
      ['es2015', {modules: false}],
      'stage-1'
    ],
    plugins: [
      'transform-vue-jsx'
    ]
  },
  postcss: [
    require('autoprefixer')({
      // Vue does not support ie 8 and below
      browsers: ['last 2 versions', 'ie > 8']
    }),
    require('postcss-nested')
  ],
  cssModules: true,{{#if electron}}
  electron: true,{{/if}}{{#if jsx}}
  jsx: true{{/if}}
}
