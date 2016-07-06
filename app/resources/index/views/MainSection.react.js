'use strict';
let React = require('react');
let TodoActions = require('../actions/TodoActions');
let TodoItem = require('./TodoItem.react');

let ReactPropTypes = React.PropTypes;

let MainSection = React.createClass({

    propTypes: {
        allTodos: React.PropTypes.object.isRequired,
        areAllComplete: ReactPropTypes.bool.isRequired
    },

    render: function() {
        
        if(Object.keys(this.props.allTodos).length < 1) {
            return null;
        }

        let allTodos = this.props.allTodos;
        let todos = [];

        let A = {
            key1: 'value1',
            key2: 'value2'
        }

        for (let key in allTodos) {
            // allTodos[key]
            todos.push(<TodoItem key={key} todo={allTodos[key]} />);
        }

        return (
            <section id='main'>
                <input id="toggle-all" type="checkbox"
                    onChange={this._onToggleCompleteAll} 
                    checked={this.props.areAllComplete ? 'checked' : ''} />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id='todo-list'>{todos}</ul>
            </section>
        );

    },

    _onToggleCompleteAll: function() {
        TodoActions.toggleCompleteAll();
    }

});

module.exports = MainSection;