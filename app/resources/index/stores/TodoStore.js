'use strict';
let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let TodoConstants = require('../constants/TodoConstants');
let assign = require('object-assign');

let CHANGE_EVENT = 'change';
let todos = {};

function create(text) {
    let id = (new Date() + Math.floor(Math.random() * 999999)).toString(36);
    todos[id] = {
        id: id,
        complete: false,
        text: text
    };
}

function update(id, updates) {
    todos[id] = assign({}, todos[id], updates);
}

function updateAll(updates) {
    for (let id in todos) {
        update(id, updates);
    }
}

function destroy(id) {
    delete todos[id];
}

function destroyCompleted() {
    for (let id in todos) {
        if(todos[id].complete) {
            destroy(id);
        }
    }
}

let TodoStore = assign({}, EventEmitter.prototype, {

    areAllComplete: function() {
        for (let id in todos) {
            if(!todos[id].complete) {
                return false;
            }
        }
        return true;
    },

    getAll: function() {
        return todos;
    },

    // emitChange: function() {
    //     this.emit(CHANGE_EVENT);
    // },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

function emitChange() {
    TodoStore.emit(CHANGE_EVENT);
}

function handleAction(action) {

    let text;

    switch(action.actionType) {
        case TodoConstants.TODO_CREATE:
            text = action.text.trim();
            if(text !== '') {
                create(text);
                emitChange();
            }
            break;
        case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
            if(TodoStore.areAllComplete()) {
                updateAll({complete: false});
            }
            else {
                updateAll({complete: true});
            }
            emitChange();
            break;
        case TodoConstants.TODO_UNDO_COMPLETE:
            update(action.id, {complete: false});
            emitChange();
            break;
        case TodoConstants.TODO_COMPLETE:
            update(action.id, {complete: true});
            emitChange();
            break;
        case TodoConstants.TODO_UPDATE_TEXT:
            text = action.text.trim();
            if(text !== '') {
                update(action.id, {text: text});
                emitChange();
            }
            break;
        case TodoConstants.TODO_DESTROY:
            destroy(action.id);
            emitChange();
            break;
        case TodoConstants.TODO_DESTROY_COMPLETED:
            destroyCompleted();
            emitChange();
            break;
        default :
            break;
    }

}

TodoStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = TodoStore;