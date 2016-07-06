'use strict';

// process.env.NODE_ENV = 'development';

let Webpack = require('webpack');
let Path = require('path');
let PackageConfig = require('./package.json');
let Configure = require('./webpack/configure');
let WebpackBaseConfig = require('./webpack.base.config');


let webpackBasePlugins = WebpackBaseConfig.plugins;
let webpackEntrys = WebpackBaseConfig.entry;

let pluginsArr = [
        // 热加载
        new Webpack.HotModuleReplacementPlugin()
    ];

for (let key in webpackEntrys) {
    // 'webpack/hot/only-dev-server'
    webpackEntrys[key].unshift('webpack-dev-server/client?' + Configure.http, 'webpack/hot/dev-server');
}

let WebpackDevConfig = WebpackBaseConfig;
WebpackDevConfig.plugins = pluginsArr.concat(webpackBasePlugins);
WebpackDevConfig.entry = webpackEntrys;

// webpack-dev-server 配置
WebpackDevConfig.devServer = {
    hot: true,
    host: Configure.host,
    port: Configure.port,
    inline: true,
    progress: true,
    contentBase: Configure.build,
    outputPath: Configure.build,
    publicPath: WebpackDevConfig.output.publicPath,
    stats: {
        color: true
    },
    historyApiFallback: true
};

console.log('---------------WebpackDevConfig:\n\r', WebpackDevConfig, '\n\r', process.env.NODE_ENV, '\n\r');

module.exports = WebpackDevConfig;