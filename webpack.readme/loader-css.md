# css-loader 

    var css = require("css!./file.css");

# examples 

    { test: /\.css$/, loader: "style-loader!css-loader" },
    { test: /\.png$/, loader: "url-loader?limit=100000" },
    { test: /\.jpg$/, loader: "file-loader" }