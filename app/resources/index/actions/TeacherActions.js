'use strict';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import MdyIndexConstants from '../constants/MdyIndexConstants';

let TeacherActoins = {

    initData: function(data) {
        
        let action = {
            type: MdyIndexConstants.TEACHER_INIT,
            data: data
        };
        IndexDispatcher.dispatch(action);

    }

};

export default TeacherActoins;