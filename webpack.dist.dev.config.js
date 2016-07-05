'use strict';

process.env.NODE_ENV = 'production';

let Webpack = require('webpack');
let Path = require('path');
let PackageConfig = require('./package.json');
let Configure = require('./webpack/configure');
let WebpackBaseConfig = require('./webpack.base.config');

let WebpackDistConfig = WebpackBaseConfig;
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

WebpackDistConfig.plugins = webpackBasePlugins.concat(pluginsArr);
WebpackDistConfig.entry = webpackEntrys;

console.log('----------------------WebpackDistConfig:\n\r', WebpackDistConfig, '\n\r', process.env.NODE_ENV, '\n\r');

module.exports = WebpackDistConfig;

