'use strict';
let Webpack = require('webpack');
let Alias = require('./alias');

let chunkPlugins = [];

if(Alias.name.length != 0) {
    chunkPlugins.push(
        new Webpack.optimize.CommonsChunkPlugin({
            name: Alias.name, // 入口文件键名
            // filename: 'commons.js', // 输出的文件名
            // chunks: ["pageA", "pageB"], // 只使用这些入口文件
            minChunks: Infinity // 一个文件至少被require几次才会被放到CommonChunk里. minChunks: 2
        })
    );
}

module.exports = chunkPlugins;