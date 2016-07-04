'use strict';

process.env.NODE_ENV = 'development';

let Webpack = require('webpack');
let Path = require('path');
let PackageConfig = require('./package.json');
let Configure = require('./webpack/configure');
let WebpackBaseConfig = require('./webpack.base.config');
let Entry = require('./webpack/entry');

let dateNow = new Date();
let pluginsBaseConfig = WebpackBaseConfig.plugins;

// let entryConfig = Entry.getEntry();


let pluginsArr = [
        // 公共模块
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'javascript/commons/common-' + PackageConfig.version + '.min.js',
            // minChunks: 2,
            // chunks: ['vendors']
        }),
        // 优化计数模块
        new Webpack.optimize.OccurrenceOrderPlugin(true),
        // 热加载
        new Webpack.HotModuleReplacementPlugin(),
        // 报错不退出
        new Webpack.NoErrorsPlugin(),
        // 设置开发模式
        new Webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ];


let WebpackDevConfig = WebpackBaseConfig;
WebpackDevConfig.plugins = pluginsBaseConfig.concat(pluginsArr);
// WebpackDevConfig.entry = Entry;
WebpackDevConfig.entry = {
    index: [
        'webpack-dev-server/client?' + Configure.http,
        'webpack/hot/only-dev-server',
        './app/resources/index/index.js'
    ],
    test: [
        'webpack-dev-server/client?' + Configure.http,
        'webpack/hot/only-dev-server',
        './app/resources/test/index.js'
    ]
};

// WebpackDevConfig.devServer = {
//     hot: true,
//     port: Configure.port,
//     inline: true,
//     progress: true,
//     contentBase: Configure.build,
//     outputPath: Configure.build,
//     stats: {color: true},
//     historyApiFallback: true
// };

console.log(WebpackDevConfig);

module.exports = WebpackDevConfig;