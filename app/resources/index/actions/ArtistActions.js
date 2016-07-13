'use strict';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import MdyIndexConstants from '../constants/MdyIndexConstants';

let ArtistActions = {

    initData: function(data) {
        
        let action = {
            type: MdyIndexConstants.ARTIST_INIT,
            data: data
        };
        IndexDispatcher.dispatch(action);

    }

};

export default ArtistActions;