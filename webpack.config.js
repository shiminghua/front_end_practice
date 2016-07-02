'use strict';

module.exports = {
    entry: './app/src',
    output: {
        path: './app/builds',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname + '/app/src',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                // loader: 'style!css!less'
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    }
};