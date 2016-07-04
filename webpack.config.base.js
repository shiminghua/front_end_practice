'use strict';
let Webpack = require('webpack');
let Path = require('path');
let Configure = require('./webpack/configure');
let Alias = require('./webpack/alias');
let HtmlPlugin = require('./webpack/htmlPlugin');
let Package = require('./package.json');
// console.log('----------', Package.version);
let plugins = [];

let webpackConfigBase = {
    // 入口文件
    entry: {},
    // 生成的文件
    output: {
        // 可能对应文件路径, 也可能是从 url 访问的情况下的路径
        path: Configure.build(),
        // 我们也用, 在 path 属性之前的, 比如调试或者 CDN 之类的域名
        publicPath: '/',
        // 用来配置生成的文件名, 比如 [hash] 用于生成 Hash, 看文档 http://webpack.github.io/docs/configuration.html#output-filename
        filename: Path.resolve('javascripts/[name]/' + Package.version + '/index.bundle.js'),
        chunkFilename: Path.resolve('javascript/[name]/' + Package.version + '/[name].chunk.js')
    },
    // 配置 loaders
    module: {
        // loaders
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                // loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
                loaders: ['babel']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                loader: 'babel'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: [
                    'file?name=style/[name]/' + Package.version + '/[name].bundle.css',
                    'extract',
                    'css'
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                // include: /^app\/*/,
                loaders: [
                    'file?name=style/[name]/' + Package.version + '/[name].bundle.css',
                    'extract',
                    'css',
                    'less'
                ]
            },
            {
                test: /\.html$/,
                exclude: 'node_modules',
                loader: 'html?attrs[]=img:src&attrs[]=link:href'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=style/fonts/[name].bundle.[ext]'
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/, // (png|jpe?g|gif)
                exclude: 'node_modules',
                loaders: process.env.NODE_ENV === 'development' ? 
                    ['url?limit=4096&name=images/[path][name].[ext]&context=' + Configure.client()] : 
                    ['url?limit=4096&name=images/[path][name].[ext]&context=' + Configure.client(), 
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
            }
        ]
    },
    // 外部资源
    externals: {
        // "react": 'window.React',
        // 'react-dom': 'window.ReactDOM'
        "jQuery": 'window.jQuery'
    },
    // 设置 extensions , 也就是文件后缀名
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less', '.html'],
        alias: Alias.alia
    },
    // 插件
    plugins: plugins.concat(HtmlPlugin)
};

// console.log(webpackConfigBase);

module.exports = webpackConfigBase;