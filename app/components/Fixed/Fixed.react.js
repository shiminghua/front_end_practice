'use strict';

import React, {Component} from 'React';

/*
 * 页面fixed定位组件 - 返回顶部
 * */
module.exports = React.createClass({
    scrollTo: function () {
        $('.mui-content').scroll().scrollTo(0, 0, 1000);
    },
    render: function () {
        return (
            <div className="page-fixed">
                <button type="button" className="mui-btn mui-icon iconfont icon-plus icon-plus-aux brad-0">
                </button>
                <button type="button" className="mui-btn mui-icon iconfont icon-upper icon-upper-aux brad-0"
                        onTouchStart={ this.scrollTo }>
                </button>
            </div>
        )
    }
});






