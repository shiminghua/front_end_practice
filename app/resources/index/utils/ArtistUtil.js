'use strict';
import ArtistActions from '../actions/ArtistActions';
import '../../../browser/javascript/mui';

function getArtistData() {

    mui.ajax('/index/recommandUserList', {
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            if(data.code  === 200) {
                ArtistActions.initData(data.data);
            }
        },
        error: function(xhr, type, errorThrown) {
            //异常处理；
		    console.log(type);
        }
    });

}

export default {
    getArtistData: getArtistData
};