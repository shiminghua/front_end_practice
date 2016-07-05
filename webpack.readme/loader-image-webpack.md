# image-webpack-loader


# install

    npm install image-webpack-loader --save-dev

# examples

    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }

    {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
    }

    {
        test: /\.(png|jpeg|jpg|gif)$/, // (png|jpe?g|gif)
        exclude: /node_modules/,
        // loader: 'url?limit=4096&name=images/[path]/[name].[ext]&context=' + Configure.client
        loaders: process.env.NODE_ENV === 'development' ? 
            ['url?limit=4096&name=images/[path][name].[ext]&context=' + Path.join(Configure.client, 'resources/')] : 
            ['url?limit=4096&name=images/[path][name].[ext]&context=' + Path.join(Configure.client, 'resources/'), 
            'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
    }


# options

    gifsicle — Compress GIF images
    jpegtran — Compress JPEG images
    optipng — Compress PNG images
    svgo — Compress SVG images
    pngquant — Compress PNG images