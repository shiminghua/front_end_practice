'use strict';
let Alias = require('./alias');
let Path = require('path');
let Configure = require('./configure');
let FilesPath = require('./filesPath');

let entry = Alias.alia;
let pathsJS = FilesPath.getPaths(Path.join(Configure.root(), 'client/resources/**/*index.js'), '', '');
let webPackDevServer = 'webpack-dev-server/client?' + Configure.path;
let hotMiddlewareScript = 'webpack-hot-middleware/client?quiet=true&reload=true&path=/__webpack-hmr';

process.env.NODE_ENV = 'development';
// console.log(pathsJS);
pathsJS.dist.forEach(function(path, i) {
    // console.log(path,i);
    switch(process.env.NODE_ENV) {
        // 静态调试，react 插件热加载
        case 'development':
            entry[pathsJS.dir[i]] = [webPackDevServer, hotMiddlewareScript, path];
            break;
        case 'server':
            entry[pathsJS.dir[i]] = [hotMiddlewareScript, path];
            break;
        // 默认为 production
        default :
            entry[pathsJS.dir[i]] = path;
            break;

    }

});

// console.log('-------------entry:', entry);

module.exports = entry;