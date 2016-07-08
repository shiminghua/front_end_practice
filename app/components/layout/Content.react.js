'use strict';
import React, { Component } from 'react';

/****************************
 * 页面主题内容
*/
class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div id="offCanvasContentScroll" className="mui-content mui-scroll-wrapper">
                <div className="mui-scroll">{this.props.children}</div>
            </div>
        );

    }

}

Content.defaultProps = {};

export default Content;