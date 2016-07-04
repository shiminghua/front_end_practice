'use strict';
let path = require('path');
let glob = require('glob');
let Configure = require('./configure');

// let clientPath =  Configure.client('resources/');
// console.log(clientPath);
function getPaths (pattern, o, n, t) {
    // console.log('-------------', pattern, o, n);
    let paths = glob.sync(pattern);
    let dist, name, extName, arrPaths, rt;
    let files = {
        url: [],
        dist: [],
        name: [],
        dir: []
    };
    
    paths.forEach(function(filePath) {

        arrPaths = path.dirname(filePath).split('/');
        rt = arrPaths.length - 1;
        extName = path.extname(filePath);
        dist = filePath.replace(o, n);
        name = path.basename(filePath, extName);

        files.url.push(filePath);
        files.dist.push(dist);
        files.name.push(name);
        files.dir.push(arrPaths[rt]);

    });
    console.log(files);
    return files;

}

// getPaths('E:\\git\\front_end_practice\\app\\resources\\**\\index.js', 'app/', 'build/');

module.exports = {
    getPaths: getPaths
};