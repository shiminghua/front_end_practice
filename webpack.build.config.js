'use strict';

// process.env.NODE_ENV = 'production';

let Webpack = require('webpack');
let Path = require('path');
let PackageConfig = require('./package.json');
let Configure = require('./webpack/configure');
let WebpackBaseConfig = require('./webpack.base.config');

let WebpackBuildConfig = WebpackBaseConfig;

console.log('----------------------webpackBuildConfig:\n\r', WebpackBuildConfig, '\n\r-------------NODE_ENV:\n\r', process.env.NODE_ENV, '\n\r');

module.exports = WebpackBuildConfig;