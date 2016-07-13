'use strict';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import Events, { EventEmitter } from 'events';
import assign from 'object-assign';
import MdyIndexConstants from '../constants/MdyIndexConstants';
import WebUtil from '../utils/webutil';

const CHANGE_EVENT = 'change';

let dataTeacher = {};

function initData(data) {
    dataTeacher = WebUtil.initData(data);
}

function emitChange() {
    TeacherStore.emit(CHANGE_EVENT);
}

let TeacherStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return dataTeacher;
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

function handleAction(action) {

    switch(action.type) {
        case MdyIndexConstants.TEACHER_INIT:
            let data = action.data;
            if(data.length > 0) {
                initData(data);
                emitChange();
            }
            break;
        default :
            break;
    }

} 

TeacherStore.dispatchToken = IndexDispatcher.register(handleAction);

export default TeacherStore;