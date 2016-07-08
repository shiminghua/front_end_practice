'use strict';
import React, {Component} from 'react';

let imgStyle = { 'width': '100%','height': '7.875rem' };
let aStyle = { 'margin': '0px','padding': '0px' };
let pStyle1 = { 'color': '#3E3E3E','fontSize': '12px' };
let divStyle1 = { 'color': '#676767','textOverflow': 'initial','fontSize': '12px' };
let divStyle2 = { 'backgroundColor': '#fff' };
let spanStyle = { 'marginLeft': '0px','paddingRight': '5px' };
let spanStyle2 = { 'maxWidth': '50px','display': 'inline-block','overflow': 'hidden', 'textOverflow': 'ellipsis' };
let ulStyle = { 'padding': '10px' };
let liStyle = { 'padding': '.5rem', 'backgroundColor': '#f8f8f8', 'border': '1px solid #EAEAEA', 'width': '48%', 'marginBottom': '4%', 'textAlign': 'initial' };
let liStyle2 = { 'padding': '.5rem', 'backgroundColor': '#f8f8f8', 'border': '1px solid #EAEAEA', 'width': '48%', 'marginBottom': '4%', 'textAlign': 'initial', marginRight: '4%'};

/********
 * 每日作品推荐组件
*/
class IndexEveryOpus extends Component {

    handleClickLike() {
        console.log('click like')
    }

    render() {
        return (
            <div className="c-every">
                <div className="mui-text-center c-list-t" style={ divStyle2 }>
                    <p>RECOMMENDED DAILY WORK</p>
                    <h5>每日作品推荐</h5>
                </div>
                <ul className="mui-table-view mui-grid-view" style={ ulStyle }>

                    <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ liStyle2 }>
                        <a href={ 'javascript:;' } style={ aStyle }>
                            <img className="mui-media-object" data-lazyload='http://img.modouyu.net/201606/22/works/14665554732067594.jpg@0r_360w_360h_1e_1c' style={ imgStyle }/>
                            <p className="mui-media-body" style={ pStyle1 }>幸福就是可以一起睡觉</p>
                            <div className="mui-media-body" style={ divStyle1 }>
                                <div className="mui-pull-left">
                                    <span className="mui-icon iconfont icon-user icon-user-aux" style={ spanStyle }></span>
                                    <span style={ spanStyle2 }>涂兴声</span>
                                </div>
                                <div className="mui-pull-right">
                                    <span className="mui-icon iconfont icon-like icon-like-aux"style={ spanStyle } onClick={ this.handleClickLike.bind(this) }></span>
                                    <span>1234</span>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ liStyle }>
                        <a href={ 'javascript:;' } style={ aStyle }>
                            <img className="mui-media-object" data-lazyload='http://img.modouyu.net/201606/19/works/14663326330491098.jpg@0r_360w_360h_1e_1c' style={ imgStyle }/>
                            <p className="mui-media-body" style={ pStyle1 }>幸福就是可以一起睡觉</p>
                            <div className="mui-media-body" style={ divStyle1 }>
                                <div className="mui-pull-left">
                                    <span className="mui-icon iconfont icon-user icon-user-aux" style={ spanStyle }></span>
                                    <span style={ spanStyle2 }>涂兴声</span>
                                </div>
                                <div className="mui-pull-right">
                                    <span className="mui-icon iconfont icon-like icon-like-aux"style={ spanStyle } onClick={ this.handleClickLike.bind(this) }></span>
                                    <span>1234</span>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ liStyle2 }>
                        <a href={ 'javascript:;' } style={ aStyle }>
                            <img className="mui-media-object" data-lazyload='http://img.modouyu.net/201606/23/works/14666631990418046.jpg@0r_360w_360h_1e_1c' style={ imgStyle }/>
                            <p className="mui-media-body" style={ pStyle1 }>幸福就是可以一起睡觉</p>
                            <div className="mui-media-body" style={ divStyle1 }>
                                <div className="mui-pull-left">
                                    <span className="mui-icon iconfont icon-user icon-user-aux" style={ spanStyle }></span>
                                    <span style={ spanStyle2 }>涂兴声</span>
                                </div>
                                <div className="mui-pull-right">
                                    <span className="mui-icon iconfont icon-like icon-like-aux"style={ spanStyle } onClick={ this.handleClickLike.bind(this) }></span>
                                    <span>1234</span>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ liStyle }>
                        <a href={ 'javascript:;' } style={ aStyle }>
                            <img className="mui-media-object" data-lazyload='http://img.modouyu.net/201605/10/works/14628451513152616.jpg@0r_360w_360h_1e_1c' style={ imgStyle }/>
                            <p className="mui-media-body" style={ pStyle1 }>幸福就是可以一起睡觉</p>
                            <div className="mui-media-body" style={ divStyle1 }>
                                <div className="mui-pull-left">
                                    <span className="mui-icon iconfont icon-user icon-user-aux" style={ spanStyle }></span>
                                    <span style={ spanStyle2 }>涂兴声</span>
                                </div>
                                <div className="mui-pull-right">
                                    <span className="mui-icon iconfont icon-like icon-like-aux"style={ spanStyle } onClick={ this.handleClickLike.bind(this) }></span>
                                    <span>1234</span>
                                </div>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        );
    }

}



export default IndexEveryOpus;