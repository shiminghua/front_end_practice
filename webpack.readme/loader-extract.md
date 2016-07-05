# extract-loader 

    import stylesheetUrl from "file!extract!css!main.css";

# installation

    npm install extract-loader

# examples 

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

    {
        test: indexHtml,
        loaders: [
            "file?name=[name].[ext]",
            "extract",
            "html?" + JSON.stringify({
                attrs: ["img:src", "link:href"]
            })
        ]
    }