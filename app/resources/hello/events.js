'use strict';
var React = rquire('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({

    /**************
     * 唯一一个必须的函数，负责渲染界面，输出DOM元素
     * render - 提供
    */
    render: function() {
        this.props; // 属性
        this.state; // 状态
        // this.props.children; 
        return (
            <div>
                <h1>Hello world!</h1>
                <p>aaaaaaaaa</p>
            </div>
        );
    },

    /***************
     * 在最初渲染时设置组件 this.state 默认值，仅在组件渲染前调用一次
     * 返回一个对象
    */
    getInitialState: function() {
        return {
            thing: this.props.thingy
        };
        // this.state.thing;
    },

    /*******************
     * 仅在首次创建时调用一次，设置 this.props 默认值
     * 返回一个对象
    */
    getDefaultProps: function() {
        return {
            thingy: 'cheese'
        };
        // this.props.thingy;
    },

    /******************
     * 数组，包含mixin对象
    */
    mixins: [],

    /************
     * 对 this.props 进行类型检查
     * React.PropTypes.array
     * React.PropTypes.bool
     * React.PropTypes.func
     * React.PropTypes.number
     * React.PropTypes.object
     * React.PropTypes.string
     * React.PropTypes.any
     * React.PropTypes.node // React 可渲染的任何类型：数字、字符串、元素等
     * React.PropTypes.element // React 元素
     * 必填项添加 .isRequired 
     * React.PropTypes.array.isRequired
    */
    propTypes: {
        optionalBoolean: React.PropTypes.bool,
        requiredArr: React.PropTypes.array.isRequired
    },
    // this.props.optionalBoolean

    /**************
     * 初始渲染前执行
    */
    componentWillMount: function() {

    },

    /**********
     * 在组件渲染成 DOM 后调用
    */
    componentDidMount: function() {
        // 可用 React.findDOMNode 函数调用它
        // 可在此设置一些方法，如倒计时等
    },

    /*****************
     * 组件接受属性时执行 - props
     * 每次属性改变时函数被执行，但是第一次渲染时不会执行
    */
    componentWillReceiveProps: function(nextProps) {
        // nextProps  新属性
        // this.props 当前属性
    },

    /****************
     * 在组件渲染前被调用，每次属性改变或者状态被恢复都会被调用；优化函数，不推荐使用
    */
    shouldComponentUpdate: function(nextProps, nextState) {
        // return false; 时会跳过 render() 函数
        // nextProps 新属性
        // nextState 新状态
    },

    /*****************
     * 组件一出现渲染时被调用，不推荐使用
     * 不能使用 setState
    */
    componentWillUpdate: function(nextProps, nextState) {
        // nextProps 新属性
        // nextState 新状态
    },
    /*********
     * 仅在DOM的所有渲染更新被处理完后被执行
    */
    componentDidUpdate: function(prevProps, prevState) {
        // prevProps 之前的属性
        // prevState 之前的状态
    },

    /***********
     * 组件卸载时被调用
    */
    componentWillUnmount: function() {
        // 在 componentDidMount 中设置的方法，必须在此方法中清除
    }

});

module.exports = Hello;