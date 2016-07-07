'use strict';
let React = require('react');
// let TodoStore = require('../stores/TodoStore');
let TodoActions = require('../actions/TodoActions');

let TodoTextInput = React.createClass({

    getInitialState: function() {
        return {
            inputValue: ''
        };
    },

    handleInputValueChange: function(event) {
        let inputValue = event.target.value;
        this.setState({
            inputValue: inputValue
        });
    },

    handleFormSubmit: function(event) {
        event.preventDefault();
        TodoActions.create(this.state.inputValue);
    },

    render: function() {

        return (
            <form>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputValueChange} />
                <input type="submit" value="提交" onClick={this.handleFormSubmit} />
            </form>
        );

    }

});

module.exports = TodoTextInput;