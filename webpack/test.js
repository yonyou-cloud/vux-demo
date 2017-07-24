var webpack = require('webpack');
var webpackConfig = require("./base.js");

// module.exports = webpack(webpackConfig);


const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(webpackConfig, {
    options: {},
    plugins: [{
        name: 'vux-ui'
    }]
})
