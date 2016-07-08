'use strict';
import React, {Component} from 'react';

let divStyle1 = { 'backgroundColor': '#f8f8f8' };
let divStyle2 = { 'padding': '10px 0','backgroundColor': '#f8f8f8' };
let aStyle = { 'margin': '0px','padding': '0px' };
let imgStyle = { 'width': '5rem','height': '5rem' };
let spanStyle = { 'color': '#3E3E3E','fontSize': '12px' };

/****************
 * 艺术家推荐榜
*/
class IndexArtist extends Component {

    render() {
        return(
            <div className="c-artist" style={ divStyle1 }>
                <div className="mui-text-center c-list-t">
                    <p>THE ARTIST LIST</p>
                    <h5>艺术家推荐榜</h5>
                </div>
                <div className="mui-table-view mui-grid-view" style={ divStyle2 }>

                    <div className="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href={ 'javascript:;' } style={ aStyle }>
                            <img className="mui-media-object brad-50" data-lazyload='http://img.modouyu.net/201606/14/other/14658676092048402.png' style={ imgStyle }/>
                            <span className="mui-media-body text-flow" style={ spanStyle }>莫奈</span>
                        </a>
                    </div>

                    <div className="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href={ 'javascript:;' } style={ aStyle }>
                            <img className="mui-media-object brad-50" data-lazyload='http://img.modouyu.net/201606/26/other/14669132635102155.png' style={ imgStyle }/>
                            <span className="mui-media-body text-flow" style={ spanStyle }>莫奈</span>
                        </a>
                    </div>

                    <div className="mui-table-view-cell mui-media mui-col-xs-4">
                        <a href={ 'javascript:;' } style={ aStyle }>
                            <img className="mui-media-object brad-50" data-lazyload='http://img.modouyu.net/201605/22/other/14638826196157214.png' style={ imgStyle }/>
                            <span className="mui-media-body text-flow" style={ spanStyle }>莫奈</span>
                        </a>
                    </div>

                </div>
            </div>
        );
    }

}

export default IndexArtist;