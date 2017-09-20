var webpack = require('webpack')
var merge = require('webpack-merge')
var config = require('./base.js')

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  output: {
    comments: false
  }
}))

module.exports = merge(config, {
  devtool: false
})
