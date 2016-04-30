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
      },
      {
        test: /\.hbs$/,
        loaders: ['handlebars']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url?limit=100&name=images/[hash].[ext]',
        exclude: [/node_modules/]
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
        template: __dirname + '/index.hbs',
        inject: false
    })
  ],
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
