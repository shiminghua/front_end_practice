'use strict';

// process.env.NODE_ENV = 'production';

let Webpack = require('webpack');
let Path = require('path');
let PackageConfig = require('./package.json');
let Configure = require('./webpack/configure');
let WebpackBaseConfig = require('./webpack.base.config');

let WebpackDistDebugConfig = WebpackBaseConfig;
let webpackBasePlugins = WebpackBaseConfig.plugins;
let webpackEntrys = WebpackBaseConfig.entry;

for (let key in webpackEntrys) {
    // 'webpack/hot/only-dev-server'
    webpackEntrys[key].unshift('webpack-dev-server/client?' + Configure.http, 'webpack/hot/dev-server');
}

let pluginsArr = [
     // 热加载
        new Webpack.HotModuleReplacementPlugin(),
        // js压缩
        new Webpack.optimize.UglifyJsPlugin({
           compressor: {
               warnings: false
           },
           comments: false,
           except: ['$', 'exports', 'require'],
           mangle: true
        })
    ];

WebpackDistDebugConfig.plugins = webpackBasePlugins.concat(pluginsArr);
WebpackDistDebugConfig.entry = webpackEntrys;

// webpack-dev-server 配置
WebpackDistDebugConfig.devServer = {
    hot: true,
    host: Configure.host,
    port: Configure.port,
    inline: true,
    progress: true,
    contentBase: Configure.build,
    outputPath: Configure.build,
    publicPath: WebpackDistDebugConfig.output.publicPath,
    stats: {
        color: true
    },
    historyApiFallback: true
};

console.log('----------------------WebpackDistDebugConfig:\n\r', WebpackDistDebugConfig, '\n\r-------------NODE_ENV:\n\r', process.env.NODE_ENV, '\n\r');

module.exports = WebpackDistDebugConfig;

