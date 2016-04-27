var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.join(process.cwd(), 'build/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
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
    autoprefixer: false,
    postcss:[
      require('postcss-cssnext')()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: path.join(process.cwd(), 'build/index.html'),
        title: 'VuePack',
        template: __dirname + '/index.html'
    })
  ],
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
