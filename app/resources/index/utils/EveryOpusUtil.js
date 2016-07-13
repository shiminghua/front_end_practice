'use strict';
import EveryOpusActions from '../actions/EveryOpusActions';
import '../../../browser/javascript/mui';

function getEveryOpusData() {

    mui.ajax('/index/getWorksRecommended', {
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            if(data.code  === 200) {
                EveryOpusActions.initData(data.data);
            }
        },
        error: function(xhr, type, errorThrown) {
            //异常处理；
		    console.log(type);
        }
    });

}

export default {
    getEveryOpusData: getEveryOpusData
};