'use strict';
let webpack = require('webpack'); 
let Path = require('path');
let PackageConfig = require('./package.json');
let Configure = require('./webpack/configure'); // 配置文件
let HtmlPlugin = require('./webpack/htmlPlugin'); // plugin-html-webpack 插件
let Entry = require('./webpack/entry'); // 配置入口文件

// 定义插件 webpack.DefinePlugin 的开发模式的值 - process.env.NODE_ENV
let definePlugin_NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

console.log('----------------process.env.NODE_ENV:\n\r', process.env.NODE_ENV, '\n\r');
console.log('----------------definePlugin_NODE_ENV:\n\r', definePlugin_NODE_ENV, '\n\r');

// 设置 webpack.optimize.CommonsChunkPlugin 公共模块抽取时的 name 值
let ConfigureCommonChunks =  Configure.commonChunk;
let commonChunkNames = [];

for(let key in ConfigureCommonChunks) {
    commonChunkNames.push(key);
}

console.log('----------------commonChunkNames:\n\r', commonChunkNames, '\n\r');

// 配置插件
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
        name: commonChunkNames, // 在这些模块中抽取公共模块；name值为 entry 入口文件的 key 值的数组
        filename: 'javascript/commons/[name].min.js'
    }),
    // 优化计数模块
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 报错不退出
    new webpack.NoErrorsPlugin()
];

let WebpackConfig = {

    /***************
     * 入口文件 - 多入口文件
    */
    entry: Entry,

    /******************
     * 文件输出配置
    */
    output: {
        // 可能对应文件路径, 也可能是从 url 访问的情况下的路径
        path: Configure.build,
        // 在 path 属性之前的, 比如调试或者 CDN 之类的域名
        publicPath: Configure.path,
        /*****
         * 用来配置生成的文件名, 比如 [hash] 用于生成 Hash, [name] 是入口文件 entry 的 key 值
        */
        filename: 'javascript/[name]/[name]-' + PackageConfig.version + '.min.js',
        chunkFilename: 'javascript/[name]/[name]-' + PackageConfig.version + '.min.js'
    },

    /*******************
     * 模块
    */
    module: {

        /**********
         * 加载器设置
        */
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
                exclude: /(node_modules|jquery|mui)/,  // 必须，否则报错：Uncaught ReferenceError: webpackJsonp is not defined
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
                    ['url?limit=4096&name=images/[path][name].[ext]&context=' + Configure.client] : 
                    ['url?limit=4096&name=images/[path][name].[ext]&context=' + Configure.client, 
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
            }
        ]
    },

    /*********************
     * 外部资源，引入第三方库
    */
    externals: {
        // "react": 'window.React',
        // 'react-dom': 'window.ReactDOM',
        // "jquery": 'window.jQuery'
    },

    /********************
     * 其它解决方案配置
    */
    resolve: {
        // root: 'E:/github/flux-example/src', //绝对路径
        // alias: {
        //     AppStore : 'js/stores/AppStores.js',
        //     ActionType : 'js/actions/ActionType.js',
        //     AppAction : 'js/actions/AppAction.js'
        // },
        extensions: ['', '.js', '.css', '.html', '.less', '.jsx']
    },
    
    /********************
     * 插件
    */
    plugins: pluginsArr.concat(HtmlPlugin)
};

module.exports = WebpackConfig;