'use strict';
let webpack = require('webpack');
let path = require('path');

let WebpackConfig = {
    // entry: './src/index',
    // output: {
    //     filename: './dist/vue.js'
    // },
    entry: './function/index.js',
    output: {
        filename: './function/es5.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css', '.html', '.less', '.jsx']
    }
};

module.exports = WebpackConfig;