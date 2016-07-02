'use strict';

import React, {Component} from 'React';

module.exports = React.createClass({
    // 初始化
    getInitialState: function () {
        return {
            a: [
                { url: 'javascript:;', name: '首页' },
                { url: 'javascript:;', name: '艺术作品' },
                { url: 'javascript:;', name: '艺术家' },
                { url: 'javascript:;', name: '名师点评' }
            ],
            b: [
                { url: 'javascript:;', name: '个人中心' },
                { url: 'javascript:;', name: '消息' },
                { url: 'javascript:;', name: '设置' }
            ],
            // 是否登录
            isLogin: false,
            // 消息是否阅读
            isNew: false
        }
    },
    componentDidMount: function () {
        $('.mui-scroll-wrapper').scroll();
    },
    closeOffCanvas: function(){
        $('#offCanvasWrapper').offCanvas('close');
    },
    render: function () {
        return(
            <div id="offCanvasWrapper" className="mui-off-canvas-wrap mui-draggable">
                {/* 侧滑菜单部分 */}
                <aside id="offCanvasSide" className="mui-off-canvas-left">
                    <div id="offCanvasSideScroll" className="mui-scroll-wrapper">
                        <div className="mui-scroll">

                            <div className="mui-content-padded">
                                <p className="mui-clearfix" style={{ 'width': '100%','marginTop': '20px' }}>
                                    <a className={ 'mui-pull-right'+' mui-icon'+' iconfont'+' icon-news'+' icon-news-aux'+(this.state.isNew ? ' active': '')  }><span style={{ 'fontSize': '12px','position': 'relative','top': '-3px' }}>（222）</span></a>
                                </p>
                                <div className="page-slide-t">
                                    <a href={ 'javascript:;' }><img className="brad-50" src={ 'http://img.modouyu.net/201605/06/other/14625271740165723.png' } alt="头像"/></a>
                                    {
                                        this.state.isLogin ?
                                            <p>泡芙小姐</p>
                                            :
                                            <p className="mui-clearfix" style={{ 'width': '30%','marginLeft': '35%','overflow': 'hidden' }}>
                                                <a className="mui-pull-left" href={ 'javascript:;' }>登录</a>
                                                <a className="mui-pull-right" href={ 'javascript:;' }>注册</a>
                                            </p>
                                    }
                                </div>
                            </div>
                            <ul className="mui-table-view mui-table-view-chevron mui-table-view-inverted" style={{ 'marginBottom': '-1px' }}>
                                {
                                    this.state.a.map(function (v, i, a){
                                        return (
                                            <li className="mui-table-view-cell" key={ i }>
                                                <a className="mui-navigate-right" href={ v.url } >
                                                    { v.name }
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className="mui-table-view mui-table-view-chevron mui-table-view-inverted">
                                {
                                    this.state.b.map(function (v, i, a){
                                        return (
                                            <li className="mui-table-view-cell" key={ i }>
                                                <a className="mui-navigate-right" href={ v.url } >
                                                    { v.name }
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            {
                                this.state.isLogin == false && <p className="page-slide-out"><button type="button" class="mui-btn mui-btn-danger mui-btn-block">退出</button></p>
                            }
                        </div>
                    </div>
                </aside>
                {/* 侧滑菜单部分 */}
                {/* 主界面部分 */}
                <div className="mui-inner-wrap">
                    {this.props.children}
                </div>
                {/* 主界面部分 */}
            </div>
        )
    }
});