'use strict';
let React = require('react');
let TodoActions = require('../actions/TodoActions');
let TodoTextInput = require('./TodoTextInput.react');

let Header = React.createClass({
    render: function() {
        return(
            <header id='header'>
                <h1>todos index</h1>
                <TodoTextInput id='new-todo' placeholder='What needs to be done?' />
            </header>
        );
    },

    handleSave: function(text) {
        if(text.trim()) {
            TodoActions.create(text);
        }
    }
});

module.exports = Header;