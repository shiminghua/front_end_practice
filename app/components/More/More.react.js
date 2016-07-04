'use strict';

import React, {Component} from 'React';
let EventEmitter = require('../../browser/javascript/emitter/emitter');

/*
 * 页面加载更多组件
 * */
module.exports = React.createClass({
    // 初始化
    getInitialState: function () {
        return {
            
        }
    },
    // 渲染DOM前
    componentWillMount: function () {

    },
    // 渲染DOM后
    componentDidMount: function () {

    },
    // 加载更多
    loadMore: function () {
        console.log(this.props.pageno);
        EventEmitter.dispatch(this.props.type, this.props.pageno);
    },
    render: function () {
        return (
            <div className="page-more">
                <button type="button" className="mui-btn mui-btn-danger mui-icon iconfont icon-lower brad-1" onTouchStart={ this.loadMore }> 加载更多
                </button>
            </div>
        )
    }
});