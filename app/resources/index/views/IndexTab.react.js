'use strict';
import React, {Component} from 'react';

let divStyle1 = { 'padding': '10px 0','backgroundColor': '#fff' };
let divStyle2 = { 'padding': '10px 0 0 10px' };
let aStyle = { 'margin': '0 auto' };

/*************
 * 首页按钮 - 书法、绘画、摄影
*/
class IndexTab extends Component {

    render() {
        return(
            <div className="mui-table-view mui-grid-view" style={ divStyle1 }>
                <div className="mui-table-view-cell mui-media mui-col-xs-4" style={ divStyle2 }>
                    <a className="c-tab c-tab-1" style={ aStyle } href='#'>书法</a>
                </div>
                <div className="mui-table-view-cell mui-media mui-col-xs-4" style={ divStyle2 }>
                    <a className="c-tab c-tab-2" style={ aStyle } href='#'>绘画</a>
                </div>
                <div className="mui-table-view-cell mui-media mui-col-xs-4" style={ divStyle2 }>
                    <a className="c-tab c-tab-3" style={ aStyle } href='#'>摄影</a>
                </div>
            </div>
        )
    }

}


export default IndexTab;