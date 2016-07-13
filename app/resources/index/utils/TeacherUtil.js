'use strict';
import TeacherActions from '../actions/TeacherActions';
import '../../../browser/javascript/mui';

function getData() {

    mui.ajax('/index/queryFamousCommentList', {
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            if(data.code  === 200) {
                TeacherActions.initData(data.data);
            }
        },
        error: function(xhr, type, errorThrown) {
            //异常处理；
		    console.log(type);
        }
    });

}

export default {
    getData: getData
};