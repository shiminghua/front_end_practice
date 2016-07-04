'use strict';
let Webpack = require('webpack');
let Path = require('path');
let PackageConfig = require('./package.json');
let Configure = require('./webpack/configure');
let WebpackBaseConfig = require('./webpack.base.config');
let Entry = require('./webpack/entry');

let dateNow = new Date();
let pluginsBaseConfig = WebpackBaseConfig.plugins;


// process.env.NODE_ENV = 'development';
let pluginsArr = [
        // 公共模块
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'javascript/commons/common-' + PackageConfig.version + '.min.js',
            // minChunks: 2,
            // chunks: ['vendors']
        }),
        // js压缩
        new Webpack.optimize.UglifyJsPlugin({
           compressor: {
               warnings: false
           },
           comments: false,
           except: ['$', 'exports', 'require'],
           mangle: true
        }),
        // 报错不退出
        new Webpack.NoErrorsPlugin(),
        // 设置开发模式
        new Webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ];


let WebpackBuildConfig = WebpackBaseConfig;
WebpackBuildConfig.plugins = pluginsBaseConfig.concat(pluginsArr);
WebpackBuildConfig.entry = Entry;

console.log(WebpackBuildConfig);

module.exports = WebpackBuildConfig;