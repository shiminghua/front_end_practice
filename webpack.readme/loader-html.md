# html-loader 



# examples 

    {
        module: { loaders: [
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
        ]},
        output: {
            publicPath: "http://cdn.example.com/[hash]/"
        }
    }


    <!-- fileA.html -->
    <img  src="image.jpg"  data-src="image2x.png" >
    require("html!./fileA.html");
    // => '<img  src="http://cdn.example.com/49e...ba9f/a9f...92ca.jpg"  data-src="image2x.png" >' 
    
    require("html?attrs=img:data-src!./file.html");
    // => '<img  src="image.png"  data-src="data:image/png;base64,..." >' 
    
    require("html?attrs=img:src img:data-src!./file.html");
    require("html?attrs[]=img:src&attrs[]=img:data-src!./file.html");
    // => '<img  src="http://cdn.example.com/49e...ba9f/a9f...92ca.jpg"  data-src="data:image/png;base64,..." >' 
    
    require("html?-attrs!./file.html");
    // => '<img  src="image.jpg"  data-src="image2x.png" >' 
    
    /// minimized by running `webpack --optimize-minimize` 
    // => '<img src=http://cdn.example.com/49e...ba9f/a9f...92ca.jpg data-src=data:image/png;base64,...>' 
    