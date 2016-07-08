'use strict';
import React, { Component } from 'react';

/****************************
 * 最外层div框架
*/
class Wrap extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div id="offCanvasWrapper" className="mui-off-canvas-wrap mui-draggable">
                {this.props.children}
            </div>
        );

    }

}

Wrap.defaultProps = {};

export default Wrap;