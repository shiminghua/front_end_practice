'use strict';

class Util {

    initData(data) {
        let resultData = {};
        let id = 0;
        let i = 0, len = data.length;
        for(; i < len; i++) {
            id = new Date().getTime() + '-' + Math.floor(Math.random() * 999999);
            resultData[id] = data[i];
        }
        return resultData;
    }

    initUrl(url) {
        let urlArr = url.split('@');
        if(urlArr.length === 2) {
            urlArr[1] = '@' + urlArr[1] + '_360w_360h_1e_1c';
        }
        else {
            urlArr.push('\@0r_360w_360h_1e_1c');
        }
        return urlArr.join('');
    }

    initText(text, num) {
        let result = '';
        // console.log(text.length);
        if(text.length > num) {
            result = text.substring(0, num) + '...';
        }
        else {
            result = text;
        }
        return result;
    }

}

export default new Util();