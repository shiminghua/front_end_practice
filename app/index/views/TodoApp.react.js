'use strict';
let React = require('react');
let Header = require('./Header.react');
let Footer = require('./Footer.react');
let MainSection = require('./MainSection.react');
let TodoStore = require('../stores/TodoStore');

function getTodoState() {
    return {
        allTodos: TodoStore.getAll(),
        areAllComplete: TodoStore.areAllComplete()
    };
}


let TodoApp = React.createClass({

    getInitialState: function() {
        return getTodoState();
    },

    componentDidMount: function() {
        TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div>
                <Header />
                <MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete} />
                <Footer allTodos={this.state.allTodos} />
            </div>
        );
    },

    _onChange: function() {
        this.setState(getTodoState);
    }

});

module.exports = TodoApp;
