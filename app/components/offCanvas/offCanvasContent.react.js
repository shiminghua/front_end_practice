'use strict';

import React, {Component} from 'react';

module.exports = React.createClass({
    render: function () {
        return(
            <div id="offCanvasContentScroll" className="mui-content mui-scroll-wrapper">
                <div className="mui-scroll">{this.props.children}</div>
            </div>
        )
    }
});
