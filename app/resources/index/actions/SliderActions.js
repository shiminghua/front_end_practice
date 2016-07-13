'use strict';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import MdyIndexConstants from '../constants/MdyIndexConstants';

let SliderActions = {

    initData: function(data) {
        let action = {
            type: MdyIndexConstants.SLIDER_INIT,
            data: data
        };
        IndexDispatcher.dispatch(action);
    }

};

export default SliderActions;