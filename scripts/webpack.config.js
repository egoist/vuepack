var webpack = require('webpack')
var path = require('path')

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
    postcss:[
      require('precss'),
      require('rucksack-css')({
        autoprefixer: {
            browsers: ['last 2 versions', 'ie > 8']
            fallbacks: true
        }
      })
    ]
  },
  plugins: [
  ],
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
