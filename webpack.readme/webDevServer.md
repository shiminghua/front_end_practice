# webpack-dev-server 指令注释

    webpack-dev-server --devtool eval --inline --progress --hot --config webpack.dev.config.js

    webpack-dev-server - Starts a web service on localhost:8080
    1、--devtool eval - Creates source urls for your code. Making you able to pinpoint by filename and line number where any errors are thrown
    2、--progress - Will show progress of bundling your application
    3、--colors - Yay, colors in the terminal!
    4、--content-base build - Points to the output directory configured


    webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器
    1、--devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
    2、--progress - 显示合并代码进度
    3、--colors - Yay，命令行中显示颜色！
    4、--content-base build - 指向设置的输出目录

# package.json 配置
    {
        "scripts": {
            "build": "webpack",
            "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
        }
    }

    运行命令
    npm run build
    npm run dev

# webpack-dev-server 配置

    contentBase:'./dist/view'  这里主要是将其运行目录设置为打包后的view目录。相对或绝对目录