var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.[hash].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
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
      css: 'style!css!postcss'
    }
  },
  postcss: function () {
    return [
      require('postcss-nested')()
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      title: 'VuePack',
      template: __dirname + '/index.template'
    })
  ],
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
