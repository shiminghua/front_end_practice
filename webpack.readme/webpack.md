# webpack 执行命令的参数配置


    $ webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包
    
    $ webpack --watch   //监听变动并自动打包
    
    $ webpack -p    //压缩混淆脚本，这个非常非常重要！
    
    $ webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了

    $ --display-error-details  推荐加上，方便出错时能查阅更详尽的信息（比如 webpack 寻找模块的过程），从而更好定位到问题。


# externals  外部资源，引入第三方库
    /*********************
     * 外部资源，引入第三方库
    */
    externals: {
        "react": 'window.React',
        'react-dom': 'window.ReactDOM',
        "jquery": 'window.jQuery'
    }
    externals 对象的 key 是给 require 时用的，比如 require('react')，对象的 value 表示的是如何在 global 中访问到该对象，这里是 window.React。这时候 index.html 就变成下面这样

    <script src="//cdn.bootcss.com/react/0.14.7/react.min.js"></script>
    <script src="/build/bundle.js"></script>

# entry   入口文件



# output  输出设置  