# 说明

    "start": "node server.js",
    "dev": "node server.js",
    "dist.debug": "node server.dist.js",
    "build": "webpack --display-error-details --progress --config webpack.build.config.js",
    "dist": "webpack --display-error-details --progress --config webpack.dist.config.js",

# 运行

    npm start              同 npm run start；和 npm run dev 功能相同
    npm run dev            开启静态服务，热加载
    npm run build          生成未压缩的文件
    npm run dist           生成压缩文件
    npm run dist.debug     开启静态服务，热加载，压缩文件


# 参考资料

    React引领未来的用户界面开发框架
    React导学
    React精髓

# 安装 

    --registry=https://registry.npm.taobao.org          // 淘宝镜像



npm install 
npm install --registry=https://registry.npm.taobao.org