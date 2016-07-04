'use strict';
let webpack = require('webpack');
let PackageConfig = require('./package.json');

let WebpackBaseConfig = {
    // 入口文件
    entry: {
        index: ['./app/resources/index/index.js'],
        test: ['./app/resources/test/index.js']
    },
    // 生成文件
    output: {
        // 可能对应文件路径, 也可能是从 url 访问的情况下的路径
        path: './build/',
        // 在 path 属性之前的, 比如调试或者 CDN 之类的域名
        publicPath: 'http://127.0.0.1:8080/build/',
        // 用来配置生成的文件名, 比如 [hash] 用于生成 Hash, 看文档 http://webpack.github.io/docs/configuration.html#output-filename
        // filename: Path.normalize(Configure.build, 'javascript/[name]/[name]-' + PackageConfig.version + '.min.js'),
        // chunkFilename: Path.normalize(Configure.build, 'javascript/[name]/[name]-' + PackageConfig.version + '.min.js')
        filename: 'javascript/[name]/[name]-' + PackageConfig.version + '.min.js',
        chunkFilename: 'javascript/[name]/[name]-' + PackageConfig.version + '.min.js'
    },
    // 模块
    module: {
        // 加载器
        loaders: [
            // jsx 加载器
            {
                test: /\.jsx$/,
                // exclude: /node_modules/,
                // include: /resources/,
                // loader: 'react-hot!babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                loaders: [
                    'react-hot',
                    'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                ]
            },
            // js 加载器
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                // include: /resources/,
                // loader: 'react-hot!babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                loaders: [
                    'react-hot',
                    'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.coffee', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

// console.log(WebpackBaseConfig);

module.exports = WebpackBaseConfig;