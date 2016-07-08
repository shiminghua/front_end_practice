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
                users={this.props.users} />;
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
    isLogin: false,
    isNewMsg: false,
    users: null
};

export default Aside;