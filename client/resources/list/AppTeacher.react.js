'use strict';

import React, {Component} from 'React';

/*
 * 首页名师点评推荐组件
 * */
module.exports = React.createClass({
    // 初始化
    getInitialState: function () {
        return {
            teacherList: [
                'http://img.modouyu.net/201605/22/works/14638909287031260.JPG@0r_120w_84h_1e_1c',
                'http://img.modouyu.net/201606/14/works/14658844372864052.jpg@0r_120w_84h_1e_1c',
                'http://img.modouyu.net/201605/06/works/14625168635225603.jpg@0r_120w_84h_1e_1c'
            ]
        }
    },
    // 渲染DOM前
    componentWillMount: function () {

    },
    // 渲染DOM后
    componentDidMount: function () {

    },
    render: function () {
        return(
            <div className="c-teacher">
                <div className="mui-text-center c-list-t">
                    <p>TEACHER REVIEWS RECOMMENDED</p>
                    <h5>名师点评推荐</h5>
                </div>
                <ul className="mui-table-view">
                    {
                        React.Children.map(this.state.teacherList, function(v, i, a){
                            return (
                                <li className="mui-table-view-cell mui-media">
                                    <a href={ 'javascript:;' }>
                                        <img className="mui-media-object mui-pull-left" style={{ 'width': '100%', 'maxWidth': '120px','height': '80px' }}
                                             data-lazyload={ v } />
                                        <div className="mui-media-body" style={{ 'marginBottom': '5px' }}>
                                            <span style={{ 'fontSize': '12px','color': '#6F6F6F' }}>幸福</span>
                                            <p style={{ 'textIndent': '0px','fontSize': '14px','color': '#4D4D4D','whiteSpace': 'initial','minHeight': '42px' }}>能和心爱的人一起睡觉是件幸福的事情...</p>
                                        </div>
                                        <div style={{ 'height': '24px' }}>
                                            <p className="mui-pull-right" style={{ 'textIndent': '0px' }}>
                                                            <span className="mui-icon iconfont icon-like icon-like-aux"
                                                                  style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                                            </span>
                                                <span>1234</span>
                                                <span style={{ 'margin': '0 3px','position': 'relative','top': '-1px' }}>∣</span>
                                                            <span className="mui-icon iconfont icon-reply icon-reply-aux"
                                                                  style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                                            </span>
                                                <span>1234</span>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
});