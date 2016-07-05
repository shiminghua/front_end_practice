# url-loader

    require("url?limit=10000!./file.png");
    // => DataUrl if "file.png" is smaller that 10kb 
    
    require("url?mimetype=image/png!./file.png");
    // => Specify mimetype for the file (Otherwise it's inferred from extension.) 
    
    require("url?prefix=img/!./file.png");
    // => Parameters for the file-loader are valid too 
    //    They are passed to the file-loader if used. 

# examples

    {
        test: /\.(png|jpeg|jpg|gif)$/, // (png|jpe?g|gif)
        exclude: /node_modules/,
        // loader: 'url?limit=4096&name=images/[path]/[name].[ext]&context=' + Configure.client
        loaders: [
            'url?limit=4096&name=images/[path][name].[ext]&context=' + Path.join(Configure.client, 'resources/')
            ]
    }
