'use strict';
let Webpack = require('webpack');
let Configure = require('./webpack/configure');
let Entry = require('./webpack/entry');
let BaseConfig = require('./webpack.config.base');


let WebpackConfigDev = BaseConfig;
// 配置入口文件
WebpackConfigDev.entry = Entry;
// 配置出口文件 publicPath
WebpackConfigDev.output.publicPath = (process.env.NODE_ENV === 'development') ? Configure.path : Configure.node_path;
// 配置插件
WebpackConfigDev.plugins = WebpackConfigDev.plugins.concat([
    //允许错误不打断程序
    new Webpack.NoErrorsPlugin(),
    // 启用热模块替换
    new Webpack.HotModuleReplacementPlugin(),
    // 优化计数模块
    new Webpack.optimize.OccurrenceOrderPlugin(true),
    // 定义自由变量
    new Webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    })
]);

WebpackConfigDev.devServer = {
    hot: true,
    port: 8080,
    inline: true,
    progress: true,
    contentBase: 'build/',
    outputPath: Configure.build,
    stats: {color: true},
    historyApiFallback: true
};

console.log(WebpackConfigDev);
console.log(process.env.NODE_ENV);

module.exports = WebpackConfigDev;