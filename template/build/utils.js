'use strict'

const _ = module.exports = {}

const modes = {}{{#if cssModule}}
modes.cssModule = true{{/if}}{{#if jsx}}
modes.jsx = true{{/if}}{{#if electron}}
modes.electron = true{{/if}}

_.modes = modes

_.cssLoader = modes.cssModules ?
  'style-loader!css-loader?-autoprefixer&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' :
  'style-loader!css-loader?-autoprefixer!postcss-loader'
