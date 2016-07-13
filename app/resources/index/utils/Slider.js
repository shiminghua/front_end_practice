'use strict';
import SliderActions from '../actions/sliderActions';
import '../../../browser/javascript/mui';

function initSliderData() {

    mui.ajax('/index/getLunboImgs', {
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            if(data.code  === 200) {
                SliderActions.initData(data.data);
            }
        },
        error: function(xhr, type, errorThrown) {
            //异常处理；
		    console.log(type);
        }
    });

}

export default {
    initSliderData: initSliderData
};