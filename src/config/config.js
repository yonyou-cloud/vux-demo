module.exports = {
  version: '1.0',
  development: {
    host: 'http://123.103.9.204:93', // 当前域名
    // apiHost: 'http://h5.api.chaoke.com:6061', // 后端接口域名
    apiHost: 'http://172.20.1.177:798' // 后端接口域名
  },
  test: {
    host: 'http://123.103.9.204:93', // 当前域名
    apiHost: 'http://h5.api.chaoke.com:6061' // 后端接口域名
  },
  prevProduction: {
    host: 'https://m.upesn.com', // 当前域名
    apiHost: 'https://h5-api.upesn.com' // 后端接口域名
  },
  production: {
    host: 'https://m.upesn.com', // 当前域名
    apiHost: 'https://h5-api.upesn.com' // 后端接口域名
  }
}
