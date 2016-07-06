'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {

    /***************
     * 在最初渲染时设置组件 state 对象，仅在组件渲染前调用一次
     * 返回一个对象
    */
    constructor(props) {
        super(props);
        this.state = {
            thing: props.thingy
        };
    }

    /**************
     * 唯一一个必须的函数，负责渲染界面，输出DOM元素
     * render - 提供
    */
    render() {
        return (
            <h1>Hello world!</h1>
        );
    }

    

}

/*****************
 * 设置默认 this.props 的值
*/
Hello.defaultProps = { thingy: 'cheese' };
Hello.propTypes = {};

export default Hello;