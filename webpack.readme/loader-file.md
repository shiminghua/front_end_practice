# Filename template placeholders

    [ext] the extension of the resource
    [name] the basename of the resource
    [path] the path of the resource relative to the context query parameter or option.
    [hash] the hash of the content, hex-encoded md5 by default
    [<hashType>:hash:<digestType>:<length>] optionally you can configure
    other hashTypes, i. e. sha1, md5, sha256, sha512
    other digestTypes, i. e. hex, base26, base32, base36, base49, base52, base58, base62, base64
    and length the length in chars
    [N] the N-th match obtained from matching the current file name against the query param regExp

# 示例

    'file?name=style/[name]/[name]-' + PackageConfig.version + '.min.css',
    'file?name=style/[path][name]-' + PackageConfig.version + '.min.css&context=' + Path.join(Configure.client,

# examples

    require("file?name=js/[hash].script.[ext]!./javascript.js");
    // => js/0dcbbaa701328a3c262cfd45869e351f.script.js 
    
    require("file?name=html-[hash:6].html!./page.html");
    // => html-109fa8.html 
    
    require("file?name=[hash]!./flash.txt");
    // => c31e9820c001c9c4a86bce33ce43b679 
    
    require("file?name=[sha512:hash:base64:7].[ext]!./image.png");
    // => gdyb21L.png 
    // use sha512 hash instead of md5 and with only 7 chars of base64 
    
    require("file?name=img-[sha512:hash:base64:7].[ext]!./image.jpg");
    // => img-VqzT5ZC.jpg 
    // use custom name, sha512 hash instead of md5 and with only 7 chars of base64 
    
    require("file?name=picture.png!./myself.png");
    // => picture.png 
    
    require("file?name=[path][name].[ext]?[hash]!./dir/file.png")
    // => dir/file.png?e43b20c069c4a01867c31e98cbce33c9 