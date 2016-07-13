'use strict';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import Events, { EventEmitter } from 'events';
import assign from 'object-assign';
import MdyIndexConstants from '../constants/MdyIndexConstants';

const CHANGE_EVENT = 'change';

let dataEveryOpus = {};

function initData(data) {
    let id = 0;
    let i = 0, len = data.length;
    for(; i < len; i++) {
        id = new Date().getTime() + '-' + Math.floor(Math.random() * 999999);
        dataEveryOpus[id] = data[i];
    }
}

function emitChange() {
    EveryOpusStore.emit(CHANGE_EVENT);
}

let EveryOpusStore = assign({}, EventEmitter.prototype, {

    getAll: function() {
        return dataEveryOpus;
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
        case MdyIndexConstants.EVERYOPUS_INIT:
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

EveryOpusStore.diapatchToken = IndexDispatcher.register(handleAction);


export default EveryOpusStore;