'use strict';
let Webpack = require('webpack');
let Path = require('path');
let PackageConfig = require('./package.json');
let Configure = require('./webpack/configure');
let HtmlPlugin = require('./webpack/htmlPlugin');


let dateNow = new Date();
let pluginsArr = [];

let WebpackBaseConfig = {
    // 入口文件
    entry: {},
    // 生成文件
    output: {
        // 可能对应文件路径, 也可能是从 url 访问的情况下的路径
        path: Configure.build,
        // 在 path 属性之前的, 比如调试或者 CDN 之类的域名
        publicPath: Configure.path,
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
            },
            // css 加载
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // include: /^client\/*/,
                loaders: [
                    'file?name=style/[name]/[name]-' + PackageConfig.version + '.min.css',
                    'extract',
                    'css'
                ]
            },
            // less 加载
            {
                test: /\.less$/,
                exclude: /node_modules/,
                // include: /^client\/*/,
                loaders: [
                    'file?name=style/[name]/[name]-' + PackageConfig.version + '.min.css',
                    'extract',
                    'css',
                    'less'
                ]
            },
            // html 加载
            {
                test: /\.html$/,
                exclude: /node_modules/,
                // include: /client/,
                loader: 'html?attrs[]=img:src&attrs[]=link:href'
            },
            // 字体加载
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=style/fonts/[name].bundle.[ext]'
            },
            // 图片加载
            {
                test: /\.(png|jpeg|jpg|gif)$/, // (png|jpe?g|gif)
                exclude: /node_modules/,
                loader: 'url?limit=4096&name=images/[path]/[name].[ext]&context=' + Configure.client
                // loaders: process.env.NODE_ENV === 'development' ? 
                //     ['url?limit=4096&name=images/[path][name].[ext]&context=' + Configure.client] : 
                //     ['url?limit=4096&name=images/[path][name].[ext]&context=' + Configure.client, 
                //     'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
            }
        ]
    },
    // 外部资源
    // externals: {
    //     "react": 'window.React',
    //     'react-dom': 'window.ReactDOM',
    //     "jQuery": 'window.jQuery'
    // },
    //其它解决方案配置
    // resolve: {
    //     root: 'E:/github/flux-example/src', //绝对路径
    //     extensions: ['', '.js', '.json', '.scss'],
    //     alias: {
    //         AppStore : 'js/stores/AppStores.js',
    //         ActionType : 'js/actions/ActionType.js',
    //         AppAction : 'js/actions/AppAction.js'
    //     }
    // },
    // 插件
    plugins: pluginsArr.concat(HtmlPlugin)
};

// console.log(WebpackBaseConfig);

module.exports = WebpackBaseConfig;