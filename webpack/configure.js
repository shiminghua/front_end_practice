'use strict';
let path = require('path');

/**
 * 配置模块
*/
const configure = {
    host: '127.0.0.1',
    port: 8080,
    node_host: 'localhost',
    node_port: 9090,
    root: rootPath => path.join(__dirname, '../', rootPath || ''),
    build: buildPath => path.join(__dirname, '../build/', buildPath || ''),
    client: clientPath => path.join(__dirname, '../client/', clientPath || ''),
    server: serverPath => path.join(__dirname, '../server/', serverPath || '')
};

configure.path = 'http://' + configure.host + (configure.port ? (':' + configure.port) : '') + '/';
configure.node_path = 'http://' + configure.node_host + (configure.node_port ? (':' + configure.node_port) : '') + '/';

// console.log('---------------config:', configure);
// console.log(__dirname, __filename);
// console.log(configure.root());
// console.log(configure.build());
// console.log(configure.client());
// console.log(configure.server());

module.exports = configure;