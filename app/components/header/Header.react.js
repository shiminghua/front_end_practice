'use strict';
import React, { Component } from 'react';

let headerStyle = { 
    backgroundColor: '#f8f8f8' 
};

/************
 * 公用头部
*/
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <header className="mui-bar mui-bar-nav" style={ headerStyle }>
                <a className="mui-icon mui-icon-bars mui-icon-bars-aux mui-pull-left" href='#offCanvasSide'></a>
                <a className="mui-icon mui-icon-plusempty mui-icon-plusempty-aux mui-pull-right"></a>
                <a className="mui-icon mui-icon-search mui-icon-search-aux mui-pull-right"></a>
                <h1 className="mui-title">
                    <a href='javascript:;'>
                        <img className="header-t-img" src={ require('./images/logo.png') } alt="墨斗鱼logo"/>
                    </a>
                </h1>
            </header>
        );

    }

}

Header.defaultProps = {};

export default Header;