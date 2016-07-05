'use strict';
let Alias = require('./alias');
let Path = require('path');
let Configure = require('./configure');
let FilesPath = require('./filesPath');

let entry = Alias.alia;
let pathsJS = FilesPath.getPaths(Path.join(Configure.client, '/resources/**/*index.js'), '', '');
// let webPackDevServer = 'webpack-dev-server/client?' + Configure.path;
// let hotMiddlewareScript = 'webpack-hot-middleware/client?quiet=true&reload=true&path=/__webpack-hmr';

// environment

pathsJS.dist.forEach(function(path, i) {
    
    entry[pathsJS.dir[i]] = [path];

    /*
    switch(process.env.NODE_ENV) {
        // 静态调试，react 插件热加载
        case 'development':
            // entry[pathsJS.dir[i]] = [webPackDevServer, hotMiddlewareScript, path];
            // 'webpack/hot/dev-server',
            // 'webpack-dev-server/client?http://127.0.0.1:8080/', // WebpackDevServer host and port
            // './app/index/index.js' // Your appʼs entry point
            entry[pathsJS.dir[i]] = [
                'webpack-dev-server/client?' + Configure.http,
                'webpack/hot/only-dev-server',
                path
                ];
            break;
        case 'server':
            entry[pathsJS.dir[i]] = [path];
            break;
        case 'production':
            entry[pathsJS.dir[i]] = [path];
            break;
        // 默认为 production
        default :
            entry[pathsJS.dir[i]] = [path];
            break;

    }
    */

});

// console.log('-------------entry:', entry, process.env.NODE_ENV);

module.exports = entry;