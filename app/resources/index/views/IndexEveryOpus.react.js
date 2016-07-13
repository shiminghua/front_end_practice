'use strict';
import React, {Component} from 'react';
import EveryOpusStore from '../stores/EveryOpusStore';
import EveryOpusTuil from '../utils/EveryOpusUtil';
import WebUtil from '../utils/webutil';

EveryOpusTuil.getEveryOpusData();

import '../../../browser/javascript/mui';
import '../../../browser/javascript/mui/mui.lazyload';
import '../../../browser/javascript/mui/mui.lazyload.img';

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

function getState() {
    return EveryOpusStore.getAll();
}

/********
 * 每日作品推荐组件
*/
class IndexEveryOpus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opus: getState()
        };
    }

    handleClickLike() {
        console.log('click like')
    }

    componentDidMount() {
        EveryOpusStore.addChangeListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        EveryOpusStore.removeChangeListener(this.onChange.bind(this));
    }

    onChange() {
        this.setState({
            opus: getState()
        });
        // window.lazyLoadApi = $(document).imageLazyload({
        //     placeholder: require('../../../browser/images/loading.png'),
        //     autoDestroy: false,
        //     diff: 0
        // });
    }

    render() {

        let arrOpus = this.state.opus;
        let items = [], i = 0, opus;
        // console.log(arrOpus);
        for(let key in arrOpus) {
            // @0r_240w_168h_1e_1c
            opus = arrOpus[key];
            let url = WebUtil.initUrl(opus.imageurl);
            // console.log(urlArr);
            items.push(
                <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ !(i%2) ? liStyle2 : liStyle } key={key}>
                    <a href={ opus.detailUrl } style={ aStyle }>
                        <img className="mui-media-object" data-lazyload={url} style={ imgStyle }/>
                        <p className="mui-media-body" style={ pStyle1 }>{opus.title}</p>
                        <div className="mui-media-body" style={ divStyle1 }>
                            <div className="mui-pull-left">
                                <span className="mui-icon iconfont icon-user icon-user-aux" style={ spanStyle }></span>
                                <span style={ spanStyle2 }>{opus.worksAuthor}</span>
                            </div>
                            <div className="mui-pull-right">
                                <span className="mui-icon iconfont icon-like icon-like-aux"style={ spanStyle } onClick={ this.handleClickLike.bind(this) }></span>
                                <span>{opus.clickLikeNum}</span>
                            </div>
                        </div>
                    </a>
                </li>);
                i++;
        }

        return (
            <div className="c-every">
                <div className="mui-text-center c-list-t" style={ divStyle2 }>
                    <p>RECOMMENDED DAILY WORK</p>
                    <h5>每日作品推荐</h5>
                </div>
                <ul className="mui-table-view mui-grid-view" style={ ulStyle }>
                    {items}
                </ul>
            </div>
        );
    }

}



export default IndexEveryOpus;