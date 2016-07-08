'use strict';

import React, {Component} from 'react';

/*
 * 首页每日作品推荐组件
 * */
module.exports = React.createClass({
    // 初始化
    getInitialState: function () {
        return {
            everyList: [
                'http://img.modouyu.net/201606/22/works/14665554732067594.jpg@0r_180w_180h_1e_1c',
                'http://img.modouyu.net/201606/19/works/14663326330491098.jpg@0r_180w_180h_1e_1c',
                'http://img.modouyu.net/201606/23/works/14666631990418046.jpg@0r_180w_180h_1e_1c',
                'http://img.modouyu.net/201605/10/works/14628451513152616.jpg@0r_180w_180h_1e_1c'
            ]
        }
    },
    // 渲染DOM前
    componentWillMount: function () {

    },
    // 渲染DOM后
    componentDidMount: function(){

    },
    render: function () {
        return (
            <div class="c-every">
                <div className="mui-text-center c-list-t" style={{ 'backgroundColor': '#fff' }}>
                    <p>RECOMMENDED DAILY WORK</p>
                    <h5>每日作品推荐</h5>
                </div>
                <ul className="mui-table-view mui-grid-view" style={{ 'padding': '10px' }}>
                    {
                        React.Children.map(this.state.everyList, function (v, i, a) {
                            let handleClickLike = function () {
                                $.toast('点赞成功');
                            };
                            let s = {
                                'padding': '.5rem',
                                'backgroundColor': '#f8f8f8',
                                'border': '1px solid #EAEAEA',
                                'width': '48%',
                                'marginBottom': '4%',
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
                                             style={{ 'color': '#3E3E3E','fontSize': '12px' }}>幸福就是可以一起睡觉
                                        </div>
                                        <div className="mui-media-body"
                                             style={{ 'color': '#676767','textOverflow': 'initial','fontSize': '12px' }}>
                                            <div className="mui-pull-left">
                                                        <span className="mui-icon iconfont icon-user icon-user-aux"
                                                              style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                                        </span>
                                                <span
                                                    style={{ 'maxWidth': '50px','display': 'inline-block','overflow': 'hidden', 'textOverflow': 'ellipsis' }}>涂兴声</span>
                                            </div>
                                            <div className="mui-pull-right">
                                                        <span className="mui-icon iconfont icon-like icon-like-aux"
                                                              style={{ 'marginLeft': '0px','paddingRight': '5px' }}
                                                              onClick={ handleClickLike }>
                                                        </span>
                                                <span>1234</span>
                                            </div>
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