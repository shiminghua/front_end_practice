'use strict';
let webpack = require('webpack');
let webpackDevServer = require('webpack-dev-server');
let configDev = require('./webpack.dev.config');
let configure = require('./webpack/configure');

let compiler = webpack(configDev);

new webpackDevServer(compiler, {
    // contentBase: '',
    publicPath: configDev.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true
}).listen(configure.port, configure.host, function (err, result) {
    if (err) { 
        console.log(err);
    }
    console.log('Listening at ' + configure.host + ':' + configure.port);
});