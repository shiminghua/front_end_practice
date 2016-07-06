'use strict';
let AppDispatcher = require('../dispatcher/AppDispatcher');
let TodoConstants = require('../constants/TodoConstants');

let TodoActions = {

    create: function(text) {

        let action = {
            // type: TodoConstants.TODO_CREATE,
            actionType: TodoConstants.TODO_CREATE,
            text: text
        };
        AppDispatcher.dispatch(action);
    },

    updateText: function(id, text) {
        let action = {
            actionType: TodoConstants.TODO_UPDATE_TEXT,
            id: id,
            text: text
        };
        AppDispatcher.dispatch(action);
    },

    toggleComplete: function(todo) {
        let id = todo.id;
        let action = {
            actionType: todo.complete ? TodoConstants.TODO_UNDO_COMPLETE : TodoConstants.TODO_COMPLETE,
            id: id
        };
        AppDispatcher.dispatch(action);
    },

    toggleCompleteAll: function() {
        let action = {
            actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
        };
        AppDispatcher.dispatch(action);
    },

    destroy: function(id) {
        let action = {
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        };
        AppDispatcher.dispatch(action);
    },

    destroyCompleted: function() {
        let action = {
            actionType: TodoConstants.TODO_DESTROY_COMPLETED
        };
        AppDispatcher.dispatch(action);
    }

};

module.exports = TodoActions;