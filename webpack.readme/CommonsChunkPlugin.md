# CommonsChunkPlugin 配置

    new webpack.optimize.CommonsChunkPlugin({
    name: "commons",
    // (the commons chunk name)

    filename: "commons.js",
    // (the filename of the commons chunk)

    // minChunks: 3,
    // (Modules must be shared between 3 entries)

    // chunks: ["pageA", "pageB"],
    // (Only use these entries)
    })