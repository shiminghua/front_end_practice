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

let pStyle2 = { 
    width: '30%',
    marginLeft: '35%',
    overflow: 'hidden' 
};

let ulStyle = {
    marginBottom: '-1px'
};

/****************************
 * 侧滑菜单登录状态内容
*/
class AsideLogout extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className="mui-scroll">
                <div className="mui-content-padded">
                    <p className="mui-clearfix" style={ pStyle }></p>
                    <div className="page-slide-t">
                        <a href='javascript:;'>
                            <img className="brad-50" src='http://img.modouyu.net/201605/06/other/14625271740165723.png' alt="头像"/>
                        </a>
                        <p className="mui-clearfix" style={ pStyle2 }>
                            <a className="mui-pull-left" href='javascript:;'>登录</a>
                            <a className="mui-pull-right" href='javascript:;'>注册</a>
                        </p>
                    </div>
                </div>
                <ul className="mui-table-view mui-table-view-chevron mui-table-view-inverted" style={ ulStyle }>
                    <li className="mui-table-view-cell"><a href="#" className="mui-navigate-right">首页</a></li>
                    <li className="mui-table-view-cell"><a href="#" className="mui-navigate-right">艺术作品</a></li>
                    <li className="mui-table-view-cell"><a href="#" className="mui-navigate-right">艺术家</a></li>
                    <li className="mui-table-view-cell"><a href="#" className="mui-navigate-right">名师点评</a></li>
                </ul>
            </div>
        );

    }

}

AsideLogout.defaultProps = {};

export default AsideLogout;