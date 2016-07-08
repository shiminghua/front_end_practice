'use strict';
import React, {Component} from 'react';

let pStyle1 = { 'textIndent': '0px','fontSize': '14px','color': '#4D4D4D','whiteSpace': 'initial','minHeight': '42px' };

/***************
 * 名师点评
*/
class IndexTeacher extends Component {

    render() {

        return(
            <div className="c-teacher">
                <div className="mui-text-center c-list-t">
                    <p>TEACHER REVIEWS RECOMMENDED</p>
                    <h5>名师点评推荐</h5>
                </div>
                <ul className="mui-table-view">

                    <li className="mui-table-view-cell mui-media">
                        <a href='#'>
                            <img className="mui-media-object mui-pull-left" style={{ 'width': '100%', 'maxWidth': '120px','height': '80px' }} data-lazyload='http://img.modouyu.net/201605/22/works/14638909287031260.JPG@0r_240w_168h_1e_1c' />
                            <div className="mui-media-body" style={{ 'marginBottom': '5px' }}>
                                <span style={{ 'fontSize': '12px','color': '#6F6F6F' }}>幸福</span>
                                <p style={ pStyle1 }>能和心爱的人一起睡觉是件幸福的事情...</p>
                            </div>
                            <div style={{ 'height': '24px' }}>
                                <p className="mui-pull-right" style={{ 'textIndent': '0px' }}>
                                                <span className="mui-icon iconfont icon-like icon-like-aux"
                                                        style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                                </span>
                                    <span>1234</span>
                                    <span style={{ 'margin': '0 3px','position': 'relative','top': '-1px' }}>∣</span>
                                                <span className="mui-icon iconfont icon-reply icon-reply-aux"
                                                        style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                                </span>
                                    <span>1234</span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="mui-table-view-cell mui-media">
                        <a href='#'>
                            <img className="mui-media-object mui-pull-left" style={{ 'width': '100%', 'maxWidth': '120px','height': '80px' }} data-lazyload='http://img.modouyu.net/201605/22/works/14638909287031260.JPG@0r_240w_168h_1e_1c' />
                            <div className="mui-media-body" style={{ 'marginBottom': '5px' }}>
                                <span style={{ 'fontSize': '12px','color': '#6F6F6F' }}>幸福</span>
                                <p style={ pStyle1 }>能和心爱的人一起睡觉是件幸福的事情...</p>
                            </div>
                            <div style={{ 'height': '24px' }}>
                                <p className="mui-pull-right" style={{ 'textIndent': '0px' }}>
                                                <span className="mui-icon iconfont icon-like icon-like-aux"
                                                        style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                                </span>
                                    <span>1234</span>
                                    <span style={{ 'margin': '0 3px','position': 'relative','top': '-1px' }}>∣</span>
                                                <span className="mui-icon iconfont icon-reply icon-reply-aux"
                                                        style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                                </span>
                                    <span>1234</span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="mui-table-view-cell mui-media">
                        <a href='#'>
                            <img className="mui-media-object mui-pull-left" style={{ 'width': '100%', 'maxWidth': '120px','height': '80px' }} data-lazyload='http://img.modouyu.net/201605/22/works/14638909287031260.JPG@0r_240w_168h_1e_1c' />
                            <div className="mui-media-body" style={{ 'marginBottom': '5px' }}>
                                <span style={{ 'fontSize': '12px','color': '#6F6F6F' }}>幸福</span>
                                <p style={ pStyle1 }>能和心爱的人一起睡觉是件幸福的事情...</p>
                            </div>
                            <div style={{ 'height': '24px' }}>
                                <p className="mui-pull-right" style={{ 'textIndent': '0px' }}>
                                                <span className="mui-icon iconfont icon-like icon-like-aux"
                                                        style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                                </span>
                                    <span>1234</span>
                                    <span style={{ 'margin': '0 3px','position': 'relative','top': '-1px' }}>∣</span>
                                                <span className="mui-icon iconfont icon-reply icon-reply-aux"
                                                        style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                                </span>
                                    <span>1234</span>
                                </p>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        );

    }

}

export default IndexTeacher;