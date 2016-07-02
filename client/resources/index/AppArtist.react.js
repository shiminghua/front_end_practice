'use strict';

import React, {Component} from 'React';

/*
 * 首页艺术家推荐榜组件
 * */
module.exports = React.createClass({
    // 初始化
    getInitialState: function () {
        return {
            artistList: [
                'http://img.modouyu.net/201606/14/other/14658676092048402.png',
                'http://img.modouyu.net/201606/26/other/14669132635102155.png',
                'http://img.modouyu.net/201605/22/other/14638826196157214.png'
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
            <div className="c-artist" style={{ 'backgroundColor': '#f8f8f8' }}>
                <div className="mui-text-center c-list-t">
                    <p>THE ARTIST LIST</p>
                    <h5>艺术家推荐榜</h5>
                </div>
                <div className="mui-table-view mui-grid-view" style={{ 'padding': '10px 0','backgroundColor': '#f8f8f8' }}>
                    {
                        React.Children.map(this.state.artistList, function(v, i, a){
                            return (
                                <div className="mui-table-view-cell mui-media mui-col-xs-4">
                                    <a href={ 'javascript:;' } style={{ 'margin': '0px','padding': '0px' }}>
                                        <img className="mui-media-object brad-50" data-lazyload={ v }
                                             style={{ 'width': '5rem','height': '5rem' }}/>
                                        <div className="mui-media-body text-flow"
                                             style={{ 'color': '#3E3E3E','fontSize': '12px' }}>莫奈
                                        </div>
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
});