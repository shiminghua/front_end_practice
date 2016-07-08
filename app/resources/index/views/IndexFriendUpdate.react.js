'use strict';
import React, {Component} from 'react';
import More from '../../../components/btns/More.react';

let liStyle1 = {
            'padding': '.5rem',
            'backgroundColor': '#fff',
            'border': '1px solid #EAEAEA',
            'width': '48%',
            'marginTop': '4%',
            'textAlign': 'initial',
            marginRight: '4%'
        };
let liStyle2 = {
            'padding': '.5rem',
            'backgroundColor': '#fff',
            'border': '1px solid #EAEAEA',
            'width': '48%',
            'marginTop': '4%',
            'textAlign': 'initial'
        };

/*********
 * 好友更新
*/
class IndexFriendUpdate extends Component {

    render() {

        return (
            <div className="c-friend" style={{ 'backgroundColor': '#f8f8f8' }}>
                <div className="mui-text-center c-list-t">
                    <p>NEW FRIENDS</p>
                    <h5>好友更新</h5>
                </div>
                <ul className="mui-table-view mui-grid-view" style={{ 'padding': '10px','backgroundColor': '#f8f8f8' }}>

                    <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ liStyle1 }>
                        <a href={ 'javascript:;' } style={{ 'margin': '0px','padding': '0px' }}>
                            <img className="mui-media-object" data-lazyload='http://img.modouyu.net/201606/14/works/14658738174506439.jpg@0r_360w_360h_1e_1c' style={{ 'width': '100%','height': '7.875rem' }}/>
                            <div className="mui-media-body" style={{ 'color': '#3E3E3E','fontSize': '12px','textAlign': 'center' }}>
                                蜡笔小新
                            </div>
                        </a>
                    </li>

                    <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ liStyle2 }>
                        <a href={ 'javascript:;' } style={{ 'margin': '0px','padding': '0px' }}>
                            <img className="mui-media-object" data-lazyload='http://img.modouyu.net/201606/14/works/14658738174506439.jpg@0r_360w_360h_1e_1c' style={{ 'width': '100%','height': '7.875rem' }}/>
                            <div className="mui-media-body" style={{ 'color': '#3E3E3E','fontSize': '12px','textAlign': 'center' }}>
                                蜡笔小新
                            </div>
                        </a>
                    </li>

                    <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ liStyle1 }>
                        <a href={ 'javascript:;' } style={{ 'margin': '0px','padding': '0px' }}>
                            <img className="mui-media-object" data-lazyload='http://img.modouyu.net/201606/14/works/14658738174506439.jpg@0r_360w_360h_1e_1c' style={{ 'width': '100%','height': '7.875rem' }}/>
                            <div className="mui-media-body" style={{ 'color': '#3E3E3E','fontSize': '12px','textAlign': 'center' }}>
                                蜡笔小新
                            </div>
                        </a>
                    </li>

                    <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ liStyle2 }>
                        <a href={ 'javascript:;' } style={{ 'margin': '0px','padding': '0px' }}>
                            <img className="mui-media-object" data-lazyload='http://img.modouyu.net/201606/14/works/14658738174506439.jpg@0r_360w_360h_1e_1c' style={{ 'width': '100%','height': '7.875rem' }}/>
                            <div className="mui-media-body" style={{ 'color': '#3E3E3E','fontSize': '12px','textAlign': 'center' }}>
                                蜡笔小新
                            </div>
                        </a>
                    </li>

                </ul>

                <More />

            </div>
        );

    }

}


export default IndexFriendUpdate;