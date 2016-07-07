'use strict';
let React = require('react');
let TodoActions = require('../actions/TodoActions');

let Footer = React.createClass({

    propTypes: {
        allTodos: React.PropTypes.object.isRequired
    },

    render: function() {

        let allTodos = this.props.allTodos;
        let total = 0;
        if(allTodos) {
            total = Object.keys(allTodos).length;
        }

        if(total === 0) {
            return null;
        }

        let completed = 0;
        for(let key in allTodos) {
            if(allTodos[key].complete) {
                completed++;
            }
        }

        let itemsLeft = total - completed;
        let itemsLeftPhrase = itemsLeft === 1 ? 'item ' : 'items ';
        itemsLeftPhrase += 'left';

        let clearCompletedButton;
        if(completed) {
            clearCompletedButton = <button id='clear-completed' onClick={this._onClearCompletedClick}>Clear completed ({completed})</button>;
        }

        return (
            <footer id='footer'>
                <span id='todo-count'><strong>{itemsLeft}</strong> {itemsLeftPhrase}</span>
                {clearCompletedButton}
            </footer>
        );

    },

    _onClearCompletedClick: function() {
        TodoActions.destroyCompleted();
    }

});

module.exports = Footer;