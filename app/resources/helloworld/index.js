// 'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('./helloworld.react');


ReactDOM.render(
    <HelloWorld name="world!">
        <p>222222222222222</p>
    </HelloWorld>,
    document.getElementById('content')
);