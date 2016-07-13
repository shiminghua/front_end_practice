'use strict';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import Events, { EventEmitter } from 'events';
import assign from 'object-assign';
import MdyIndexConstants from '../constants/MdyIndexConstants';
import WebUtil from '../utils/webutil';

const CHANGE_EVENT = 'change';

let dataArtist = {};

function initData(data) {
    // console.log(data);
    dataArtist = WebUtil.initData(data);
}

function emitChange() {
    ArtistStore.emit(CHANGE_EVENT);
}

let ArtistStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return dataArtist;
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
        case MdyIndexConstants.ARTIST_INIT:
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

ArtistStore.dispatchToken = IndexDispatcher.register(handleAction);

export default ArtistStore;