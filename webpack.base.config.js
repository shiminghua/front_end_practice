'use strict';
let webpack = require('webpack');
let Path = require('path');
let PackageConfig = require('./package.json');
let Configure = require('./webpack/configure');
let HtmlPlugin = require('./webpack/htmlPlugin');
let Entry = require('./webpack/entry');

let definePlugin_NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';
console.log('----------------process.env.NODE_ENV:\n\r', process.env.NODE_ENV, '\n\r');
console.log('----------------definePlugin_NODE_ENV:\n\r', definePlugin_NODE_ENV, '\n\r');

let ConfigureCommonChunks =  Configure.commonChunk;
let commonChunkNames = [];

for(let key in ConfigureCommonChunks) {
    commonChunkNames.push(key);
}

console.log('----------------commonChunkNames:\n\r', commonChunkNames, '\n\r');

let pluginsArr = [
    // 设置开发模式
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(definePlugin_NODE_ENV)
        }
    }),
    // 公共模块
    new webpack.optimize.CommonsChunkPlugin({
        minChunks: Infinity, // 2 Infinity
        // chunks: commonChunkNames,
        name: commonChunkNames,
        filename: 'javascript/commons/[name].min.js'
    }),
    // 优化计数模块
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 报错不退出
    new webpack.NoErrorsPlugin()
];

let WebpackConfig = {
    // 入口文件 - 多入口文件
    entry: Entry,
    // 输出配置
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
    module: {
        // 加载器设置
        loaders: [
            // jsx 加载器
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
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
                exclude: /(node_modules|jquery)/,  // 必须，否则报错：Uncaught ReferenceError: webpackJsonp is not defined
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
                    'file?name=style/[path][name]-' + PackageConfig.version + '.min.css&context=' + Path.join(Configure.client, 'resources/'),
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
                // loader: 'url?limit=4096&name=images/[path]/[name].[ext]&context=' + Configure.client
                loaders: process.env.NODE_ENV === 'development' ? 
                    ['url?limit=4096&name=images/[path][name].[ext]&context=' + Path.join(Configure.client, 'resources/')] : 
                    ['url?limit=4096&name=images/[path][name].[ext]&context=' + Path.join(Configure.client, 'resources/'), 
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
            }
        ]
    },
    // 外部资源
    externals: {
        // "react": 'window.React',
        // 'react-dom': 'window.ReactDOM',
        // "jQuery": 'window.jQuery'
    },
    //其它解决方案配置
    resolve: {
        // root: 'E:/github/flux-example/src', //绝对路径
        // alias: {
        //     AppStore : 'js/stores/AppStores.js',
        //     ActionType : 'js/actions/ActionType.js',
        //     AppAction : 'js/actions/AppAction.js'
        // },
        extensions: ['', '.js', '.css', '.html', '.less', '.jsx']
    },
    // 插件
    plugins: pluginsArr.concat(HtmlPlugin)
};

module.exports = WebpackConfig;