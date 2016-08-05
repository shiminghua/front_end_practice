'use strict';

/***********
 * 字符串定义
*/
const a = 'foobar';
const b = `foo ${a} bar`;

/******
 * 解构赋值
*/
const arr = [1, 2, 3, 4];
const [first, second] = arr;

function getFullName(obj) {
    let {firstName, secondName} = obj;
}
function getFullName({firstName, secondName}) {

}
// 函数返回多个值，优先使用对象的解构复制
function processInput(input) {
    return {left, right, top, bottom};
}


/********
 * 对象
*/
const objA = { x: null };
objA.x = 3; // 属性赋值
Object.assign(objA, { b: null }); // 添加新属性

const obj = {
    id: 5,
    name: 'minghua',
    [getkey('enabled')]: true,
};

/**************
 * 数组
*/
const itemsCopy = [...items];

/*****************
 * 函数
*/
(() => {
    console.log('Welcome to the Internet');
})();

[1, 2, 3].map((x) => {
    return x * x;
});

const boundMethod = (...params) => { method.apply(this, params) };

function divide(a, b, { option = false } = {}) {

}

function concatenateAll(...args) {
    return args.join('');
}

function handleThings(opts = {}) {

}

/****************
 * Map
*/
let map = new Map(arr);

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

for (let item of map.entries()) {
    console.log(item[0], item[1]);
}


/*****************
 * class
*/
class Queue {
    constructor(contents = []) {
        this._queue = [...contents];
    }
    pop() {
        const value = this._queue[0];
        this._queue.splice(0, 1);
        return value;
    }
}

class PeekableQueue extends Queue {
    peek() {
        return this._queue[0];
    }
}

/***********
 * 模块 module
*/
import { func1, func2 } from 'module1.js';

import React from 'react';

const Breadcrumbs = React.createClass({
    render() {
        return <nav />;
    }
});

export default Breadcrumbs;