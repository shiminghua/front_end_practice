'use strict';
let React = require('react');
let ReactPropTypes = React.PropTypes;
let TodoActions = require('../actions/TodoActions');
let TodoTextInput = require('./TodoTextInput.react');

// let cx = require('react/lib/cx');

let TodoItem = React.createClass({

    propTypes: {
        todo: ReactPropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            isEditing: false
        };
    },

    render: function() {

        let todo = this.props.todo;
        let input;

        // if(this.state.isEditing) {
        //     input = (
        //         <TodoTextInput className='edit' 
        //             onSave={this._onSave} 
        //             value={todo.text} />
        //     );
        // }
        // console.log('-----------', todo.id);
        return (
            <li className="aaa" key={todo.id}>
                <div className='view'>
                    <input className="toggle" type="checkbox" checked={todo.complete} onChange={this._onToggleComplete} />
                    <label onDoubleClick={this._onDoubleClick}>{todo.text}</label>
                    <button className="destroy" onClick={this._onDestroyClick}>delete</button>
                </div>
                {
                    /***
                     {input}
                    */
                }
            </li>
        );

    },

    _onToggleComplete: function() {
        TodoActions.toggleComplete(this.props.todo);
    },

    _onDoubleClick: function() {
        this.setState({
            isEditing: true
        });
    },

    _onSave: function() {

        TodoActions.updateText(this.props.todo.id, text);
        this.setState({
            isEditing: false
        });

    },

    _onDestroyClick: function() {
        TodoActions.destroy(this.props.todo.id);
    }

});

module.exports = TodoItem;