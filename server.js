'use strict';
let webpack = require('webpack');
let webpackDevServer = require('webpack-dev-server');
// let configDev = require('./webpack.dev.config');
let configDev = require('./webpack.config');
let configure = require('./webpack/configure');

// configDev.entry.index.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
// configDev.entry.test.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

// console.log(configDev.entry);

let entrys = configDev.entry;

for(let key in entrys) {
    console.log(entrys[key]);
    entrys[key].unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/only-dev-server");
}

configDev.entry = entrys;
console.log(configDev);

let compiler = webpack(configDev);

new webpackDevServer(compiler, {
    // contentBase: configDev.output.publicPath,
    // publicPath: configDev.output.publicPath,
    // outputPath: configure.build,
    hot: true,
    // noInfo: false,
    // progress: true,
     // Remove console.log mess during watch.
    stats: {
        // assets: false,
        // colors: true,
        // version: false,
        // hash: false,
        // timings: true,
        // chunks: false,
        // chunkModules: false
    },
    // historyApiFallback: true
}).listen(configure.port, configure.host, function (err, result) {
    if (err) { 
        console.log(err);
    }
    console.log('Listening at ' + configure.host + ':' + configure.port);
});