'use strict';

import React, {Component} from 'React';

/*
 * 首页tab切换组件
 * */
module.exports = React.createClass({
    render: function () {
        return(
            <div className="mui-table-view mui-grid-view" style={{ 'padding': '10px 0','backgroundColor': '#fff' }}>
                <div className="mui-table-view-cell mui-media mui-col-xs-4" style={{ 'padding': '10px 0 0 10px' }}><a className="c-tab c-tab-1"
                                                                               style={{ 'margin': '0 auto' }}
                                                                               href={ 'javascript:;' }>书法</a>
                </div>
                <div className="mui-table-view-cell mui-media mui-col-xs-4" style={{ 'padding': '10px 0 0 10px' }}><a className="c-tab c-tab-2"
                                                                               style={{ 'margin': '0 auto' }}
                                                                               href={ 'javascript:;' }>绘画</a>
                </div>
                <div className="mui-table-view-cell mui-media mui-col-xs-4" style={{ 'padding': '10px 0 0 10px' }}><a className="c-tab c-tab-3"
                                                                               style={{ 'margin': '0 auto' }}
                                                                               href={ 'javascript:;' }>摄影</a>
                </div>
            </div>
        )
    }
});
