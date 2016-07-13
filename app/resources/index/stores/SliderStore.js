'use strict';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import Events, { EventEmitter } from 'events';
import assign from 'object-assign';
import MdyIndexConstants from '../constants/MdyIndexConstants';

const CHANGE_EVENT = 'change';

let dataImages = {};

function initData(data) {
     let id = 0;
    let i = 0, len = data.length;
    for(; i < len; i++) {
        id = new Date().getTime() + '-' + Math.floor(Math.random() * 999999);
        dataImages[id] = data[i];
    }
}

function emitChange() {
    SliderStore.emit(CHANGE_EVENT);
}

let SliderStore = assign({}, EventEmitter.prototype, {

    getAll: function() {
        return dataImages;
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
        case MdyIndexConstants.SLIDER_INIT:
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

SliderStore.diapatchToken = IndexDispatcher.register(handleAction);


export default SliderStore;