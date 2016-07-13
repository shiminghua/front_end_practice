'use strict';
import React, { Component } from 'react';

let mainStyle = {
    minHeight: '100%'
};

/****************************
 * 页面主题内容
*/
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // $('.mui-scroll-wrapper').scroll();
    }

    render() {
        // 主界面
        return (
            <main className="mui-inner-wrap" style={ mainStyle }>
                {this.props.children}
                <div className="mui-off-canvas-backdrop"></div>
            </main>
        );

    }

}

Main.defaultProps = {};

export default Main;