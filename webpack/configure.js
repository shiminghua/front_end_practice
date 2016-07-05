'use strict';
let path = require('path');

/**
 * 配置模块
*/
const configure = {
    environment: 'production',
    host: '127.0.0.1',
    port: 8080,
    node_host: 'localhost',
    node_port: 9090,
    commonChunk: ['common'],
    root: path.join(__dirname, '../'),
    build: path.join(__dirname, '../build/'),
    dist: path.join(__dirname, '../dist/'),
    client: path.join(__dirname, '../app/'),
    server: path.join(__dirname, '../server/'), 
    getRoot: rootPath => path.join(__dirname, '../', rootPath || ''),
    getBuild: buildPath => path.join(__dirname, '../build/', buildPath || ''),
    getClient: clientPath => path.join(__dirname, '../client/', clientPath || ''),
    getServer: serverPath => path.join(__dirname, '../server/', serverPath || '')
};

configure.path = configure.http = 'http://' + configure.host + (configure.port ? (':' + configure.port) : '') + '/';
configure.node_path = 'http://' + configure.node_host + (configure.node_port ? (':' + configure.node_port) : '') + '/';

configure.html = path.join(configure.client, '/views/**/*.html');

// console.log('---------------config:', configure);
// console.log(__dirname, __filename);
// console.log(configure.root());
// console.log(configure.build());
// console.log(configure.client());
// console.log(configure.server());

module.exports = configure;