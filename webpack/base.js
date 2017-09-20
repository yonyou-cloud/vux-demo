const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const px2rem = require('postcss-px2rem')
const APP_PATH = path.resolve(__dirname, '../')
const APP_SRC = path.join(APP_PATH, '/src')
const APP_DIST = path.join(APP_PATH, '/dist')

var webpackConfig = {
  devtool: '#cheap-module-eval-source-map',
  entry: {
    app: [path.join(APP_SRC, '/main.js')],
    vendors: [
      'vue',
      'vuex',
      'vue-router',
      'axios'
    ]
  },
  output: {
    // publicPath: './',
    path: APP_DIST,
    filename: '[name].[hash].js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      app_src: APP_SRC,
      app_component: 'app_src/component',
      app_view: 'app_src/view'
    },
    extensions: ['.js', '.json', '.vue', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /^node_modules$/,
        loader: 'url-loader?limit=1000&name=img/[name]-[hash].[ext]'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.js$/,
        include: APP_SRC,
        exclude: /^node_modules$/,
        use: [{
          loader: 'babel-loader'
          // options: {
          //     presets: [
          //         ['es2015', {
          //             modules: false
          //         }]
          //     ]
          // },
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      favicon: path.join(APP_SRC, '/asset/images/ico.ico'),
      template: path.join(APP_SRC, '/template/index.html')
    }),
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [ autoprefixer({
            browsers: [
              'iOS >= 7',
              'Android >= 4.1'
            ]
          })]
        }
      }
    })
  ]
}

const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(webpackConfig, { plugins: ['vux-ui'] })
