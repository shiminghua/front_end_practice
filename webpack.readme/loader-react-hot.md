# react-hot-loader 

# installaction 

    npm install --save-dev react-hot-loader

# examples

    {
        test: /\.js$/,
        exclude: /node_modules/,  // 必须，否则报错：Uncaught ReferenceError: webpackJsonp is not defined
        // include: /resources/,
        // loader: 'react-hot!babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
        loaders: [
            'react-hot',
            'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
        ]
    }
