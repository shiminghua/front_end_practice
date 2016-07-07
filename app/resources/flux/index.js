'use strict';

let React = require('react');
let ReactDom = require('react-dom');
// let Hello = require('./hello/hello');
// let CommentBox = require('./comment/comment-box');
// let ProductSelect = require('./comment/product-select');
// let MyComponent = require('./children/test');

// let products = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

// let Application = require('./chat3/views/Application.react');

//let WebAPIUtils = require('./chat3/utils/WebAPIUtils');
//
//WebAPIUtils.initializeStreamOfTweets();

/******
 * /views/ 
 * ./views/
 * ../../views/
*/
let TodoApp = require('./views/TodoApp.react');

//let ChatApp = require('./chat/views/ChatApp.react');

ReactDom.render(
    <TodoApp />,
    document.getElementById('content')
);



