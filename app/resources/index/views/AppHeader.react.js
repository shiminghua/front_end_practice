'use strict';

import React, {Component} from 'react';

module.exports = React.createClass({
    getInitialState: function () {
        return {
            s: false
        }
    },
    render: function () {
        //let searchBtn = this.state.s && <a className="mui-icon mui-icon-plusempty mui-icon-plusempty-aux mui-pull-right"></a>;
        return (
            <header className="mui-bar mui-bar-nav" style={{ backgroundColor: '#f8f8f8' }}>
                <a className="mui-icon mui-icon-bars mui-icon-bars-aux mui-pull-left" href={ '#offCanvasSide' }></a>
                {
                    this.state.s && <a className="mui-icon mui-icon-plusempty mui-icon-plusempty-aux mui-pull-right"></a>
                }
                <a className="mui-icon mui-icon-search mui-icon-search-aux mui-pull-right"></a>
                <h1 className="mui-title">
                    <a href={ 'javascript:;' }>
                        <img className="header-t-img" src={ require('../images/logo.png') } alt="墨斗鱼logo"/>
                    </a>
                </h1>
            </header>
        )
    }
});
