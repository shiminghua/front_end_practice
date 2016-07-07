'use strict';

import React, {Component} from 'React';
let EventEmitter = require('../../browser/javascript/emitter/emitter');

/*
 * 首页好友更新组件
 * */
module.exports = React.createClass({// 初始化
    getInitialState: function () {
        return {
            friendList: [],
            friendIndex: 1
        }
    },
    // 获取好友更新列表数据
    getFriendList: function (pageNo) {
        this.setState({
            friendList: this.state.friendList.concat([
                'http://img.modouyu.net/201606/14/works/14658738174506439.jpg@0r_180w_180h_1e_1c',
                'http://img.modouyu.net/201606/04/works/14650379942769108.jpg@0r_180w_180h_1e_1c',
                'http://img.modouyu.net/201606/10/works/14655682735439479.jpg@0r_180w_180h_1e_1c',
                'http://img.modouyu.net/201605/13/works/14630658324304723.jpg@0r_180w_180h_1e_1c'
            ]),
            friendIndex: pageNo + 1
        }, function () {
            this.props.friendParent(this.state.friendIndex);
        });
    },
    // 渲染前调用一次，这个时候DOM结构还没有渲染
    componentWillMount: function () {
        this.getFriendList(this.state.friendIndex);
    },
    // 初始化渲染不会调用，更新后调用
    componentDidUpdate: function () {
        // 更新图片懒加载
        lazyLoadApi.refresh(true);
    },
    // 渲染DOM后
    componentDidMount: function () {
        EventEmitter.subscribe('addFriends', function (pageNo) {
            this.getFriendList(pageNo);
        }.bind(this));
    },
    // 组件移除前调用
    componentWillUnmount: function () {
        EventEmitter.unSubscribe('addFriends');
    },
    render: function () {
        return (
            <div className="c-friend" style={{ 'backgroundColor': '#f8f8f8' }}>
                <div className="mui-text-center c-list-t">
                    <p>NEW FRIENDS</p>
                    <h5>好友更新</h5>
                </div>
                <ul className="mui-table-view mui-grid-view" style={{ 'padding': '10px','backgroundColor': '#f8f8f8' }}>
                    {
                        React.Children.map(this.state.friendList, function (v, i, a) {
                            let s = {
                                'padding': '.5rem',
                                'backgroundColor': '#fff',
                                'border': '1px solid #EAEAEA',
                                'width': '48%',
                                'marginTop': '4%',
                                'textAlign': 'initial'
                            };
                            let n = i % 2 ? 'marginLeft' : 'marginRight';
                            s[n] = '2%';
                            return (
                                <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ s }>
                                    <a href={ 'javascript:;' } style={{ 'margin': '0px','padding': '0px' }}>
                                        <img className="mui-media-object" data-lazyload={ v }
                                             style={{ 'width': '100%','height': '7.875rem' }}/>
                                        <div className="mui-media-body"
                                             style={{ 'color': '#3E3E3E','fontSize': '12px','textAlign': 'center' }}>
                                            蜡笔小新
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

