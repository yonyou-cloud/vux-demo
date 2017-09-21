// var webpack = require('webpack')
var merge = require('webpack-merge')
var config = require('./base.js')
var BabelWebpackPlugin = require('babel-minify-webpack-plugin')

config.plugins.push(new BabelWebpackPlugin())

module.exports = merge(config, {
  devtool: false
})
