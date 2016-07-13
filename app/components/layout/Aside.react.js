'use strict';
import React, { Component } from 'react';
import AsideLogin from './AsideLogin.react';
import AsideLogout from './AsideLogout.react';

/****************************
 * 侧滑菜单
*/
class Aside extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let asideChildren = '';
        if(this.props.isLogin) {
            asideChildren = <AsideLogin 
                isLogin={this.props.isLogin} 
                isNewMsg={this.props.isNewMsg} 
                user={this.props.user} />;
        }
        else {
            asideChildren = <AsideLogout />;
        }

        return (
            <aside id="offCanvasSide" className="mui-off-canvas-left">
                <div id="offCanvasSideScroll" className="mui-scroll-wrapper">
                    {asideChildren}
                </div>
            </aside>
        );

    }

}

Aside.defaultProps = {
    isLogin: (window.NODE_VALUE && window.NODE_VALUE.isLogin) ? window.NODE_VALUE.isLogin : false,
    isNewMsg: (window.NODE_VALUE && window.NODE_VALUE.isNewMsg) ? window.NODE_VALUE.isNewMsg : false,
    user: (window.NODE_VALUE && window.NODE_VALUE.user) ? window.NODE_VALUE.user : null
};

export default Aside;