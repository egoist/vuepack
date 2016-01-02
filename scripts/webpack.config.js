var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['babel'],
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/,
        loaders: ['vue']
      }
    ]
  },
  vue: {
    loaders: {
        //css: ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    postcss:[
      require('precss'),
      require('rucksack-css')({
        autoprefixer: {
            browsers: ['last 2 versions', 'ie > 8'],
            fallbacks: true
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: './index.html',
        title: 'VuePack',
        template: __dirname + '/index.html'
    }),
    //new ExtractTextPlugin('styles.[contenthash].css')
  ],
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
