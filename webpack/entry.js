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

});

// 提取React,jQuery等库文件
// entry.react = ['react', 'react-dom'];
// entry.jquery = ['jquery'];
let ConfigureCommonChunks =  Configure.commonChunk;

for(let key in ConfigureCommonChunks) {
    entry[key] = ConfigureCommonChunks[key];
}

// console.log('-------------entry:\n\r', entry, '\n\r', process.env.NODE_ENV, '\n\r');

module.exports = entry;