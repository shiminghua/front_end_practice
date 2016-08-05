'use strict';

// process.env.NODE_ENV = 'production';

let Webpack = require('webpack');
let Path = require('path');
let PackageConfig = require('./package.json');
let Configure = require('./webpack/configure');
let WebpackBaseConfig = require('./webpack.base.config');

let WebpackDistConfig = WebpackBaseConfig;
let webpackBasePlugins = WebpackBaseConfig.plugins;

let pluginsArr = [
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

console.log('----------------------WebpackDistConfig:\n\r', WebpackDistConfig, '\n\r-------------NODE_ENV:\n\r', process.env.NODE_ENV, '\n\r');

module.exports = WebpackDistConfig;

