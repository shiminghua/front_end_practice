'use strict';
let React = require('react');
let TodoActions = require('../actions/TodoActions');
let TodoTextInput = require('./TodoTextInput.react');

let Header = React.createClass({
    render: function() {
        return(
            <header id='header'>
                <h1>todos index 1111111111</h1>
                <TodoTextInput id='new-todo' placeholder='What needs to be done?' onSave={this._onSave} />
            </header>
        );
    },

    _onSave: function(text) {
        if(text.trim()) {
            TodoActions.create(text);
        }
    }
});

module.exports = Header;