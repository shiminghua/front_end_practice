# 说明

    "start": "node server.js",
    "dev": "node server.js",
    "distdev": "node server.dist.js",
    "build": "webpack --display-error-details --progress --config webpack.build.config.js",
    "dist": "webpack --display-error-details --progress --config webpack.dist.config.js",

# 运行

    npm start       同 npm run start；和 npm run dev 功能相同
    npm run dev     开启静态服务，热加载
    npm run build   生成未压缩的文件
    npm run dist    生成压缩文件
    npm run distdev 开启静态服务，热加载，压缩文件
