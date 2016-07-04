
var webpack = require('webpack');

console.log(__dirname);

module.exports = {
    entry: {
        index: [ 
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://127.0.0.1:8080/', // WebpackDevServer host and port
            './app/index/index.js' // Your appʼs entry point
        ],
        test: [ 
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://127.0.0.1:8080/', // WebpackDevServer host and port
            './app/test/index.js' // Your appʼs entry point
        ],
        vendors: ['react', 'react-dom']
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/build/',
        filename: '[name]/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        // 公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons/react.min.js',
            // minChunks: 2,
            // chunks: ['vendors']
        }),
        // js压缩
        // new webpack.optimize.UglifyJsPlugin({
        //    compressor: {
        //        warnings: false
        //    },
        //    comments: false,
        //    except: ['$', 'exports', 'require'],
        //    mangle: true
        // }),
        // 热加载
        new webpack.HotModuleReplacementPlugin(),
        // 报错不退出
        new webpack.NoErrorsPlugin(),
        // 设置开发模式
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};