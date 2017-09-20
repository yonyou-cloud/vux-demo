var webpack = require('webpack')
var config = require('./base.js')
var WebpackDevServer = require('webpack-dev-server')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

config.plugins.push(new BundleAnalyzerPlugin())
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8888/')
var compiler = webpack(config)

new WebpackDevServer(compiler, {
  quiet: false,
  stats: {
    colors: true
  },
  proxy: {
    '/login': {
      target: 'https://pc-api.upesn.com',
      secure: false, // 是否验证SSl证书
      changeOrigin: true // 如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求，这样就不会有跨域问题了
    }
  },
  // hot: true,
  compress: true, // gzip压缩
  publicPath: 'http://localhost:8888/',
  contentBase: '../dist/', // 默认情况下，webpack-dev-server会从项目的根目录提供文件，可以通过此选项设置文件的目录名
  historyApiFallback: true // 当设置为true时，访问所有服务器上不存在的文件，都会被重定向到/，也就是index.html文件
}).listen(8888)
