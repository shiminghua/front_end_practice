'use strict';
import React, { Component } from 'react';

let spanStyle = { 
    fontSize: '12px',
    position: 'relative',
    top: '-3px' 
};

let pStyle = { 
    width: '100%',
    marginTop: '20px' 
};

let ulStyle = {
    marginBottom: '-1px'
};

/****************************
 * 侧滑菜单登录状态内容
*/
class AsideLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className="mui-scroll">
                <div className="mui-content-padded">
                    <p className="mui-clearfix" style={ pStyle }>
                        <a className='mui-pull-right mui-icon iconfont icon-news icon-news-aux active'>
                            <span style={ spanStyle }>（222）</span>
                        </a>
                    </p>
                    <div className="page-slide-t">
                        <a href='javascript:;'>
                            <img className="brad-50" src='http://img.modouyu.net/201605/06/other/14625271740165723.png' alt="头像"/>
                        </a>
                        <p>泡芙小姐</p>
                    </div>
                </div>
                <ul className="mui-table-view mui-table-view-chevron mui-table-view-inverted" style={ ulStyle }>
                    <li className="mui-table-view-cell"><a href="#" className="mui-navigate-right">首页</a></li>
                    <li className="mui-table-view-cell"><a href="#" className="mui-navigate-right">艺术作品</a></li>
                    <li className="mui-table-view-cell"><a href="#" className="mui-navigate-right">艺术家</a></li>
                    <li className="mui-table-view-cell"><a href="#" className="mui-navigate-right">名师点评</a></li>
                </ul>
                <ul className="mui-table-view mui-table-view-chevron mui-table-view-inverted">
                    <li className="mui-table-view-cell"><a className="mui-navigate-right" href='#'>个人中心</a></li>
                    <li className="mui-table-view-cell"><a className="mui-navigate-right" href='#'>消息</a></li>
                    <li className="mui-table-view-cell"><a className="mui-navigate-right" href='#'>设置</a></li>
                </ul>
                <p className="page-slide-out">
                    <button type="button" class="mui-btn mui-btn-danger mui-btn-block">退出</button>
                </p>
            </div>
        );

    }

}

AsideLogin.defaultProps = {
    isLogin: false,
    isNewMsg: false,
    users: null
};

export default AsideLogin;