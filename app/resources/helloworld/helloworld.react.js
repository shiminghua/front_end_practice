// 'use strict';
var React = require('react');
// var ReactDOM = require('react-dom');



var HelloWorld = React.createClass({

    render: function() {

        // this.props.name

        return (
            <div>
                <h1>hello {this.props.name}</h1>
                {this.props.children}
            </div>
        );

    }

});

module.exports = HelloWorld;