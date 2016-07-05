# less-loader

    var css = require("!raw!less!./file.less");
    // => returns compiled css code from file.less, resolves imports 
    var css = require("!css!less!./file.less");
    // => returns compiled css code from file.less, resolves imports and url(...)s 

# examples 

    {
        test: /\.less$/,
        loader: "style!css!less"
    }

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
    }