'use strict';
import React, {Component} from 'react';
import ArtistStore from '../stores/ArtistStore';
import ArtistUtil from '../utils/ArtistUtil';

import '../../../browser/javascript/mui';
import '../../../browser/javascript/mui/mui.lazyload';
import '../../../browser/javascript/mui/mui.lazyload.img';

ArtistUtil.getArtistData();

let divStyle1 = { 'backgroundColor': '#f8f8f8' };
let divStyle2 = { 'padding': '10px 0','backgroundColor': '#f8f8f8' };
let aStyle = { 'margin': '0px','padding': '0px' };
let imgStyle = { 'width': '5rem','height': '5rem' };
let spanStyle = { 'color': '#3E3E3E','fontSize': '12px' };

function getState() {
    return ArtistStore.getAll();
}

/****************
 * 艺术家推荐榜
*/
class IndexArtist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artists: getState()
        };
    }

    componentDidMount() {
        ArtistStore.addChangeListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        ArtistStore.removeChangeListener(this.onChange.bind(this));
    }

    onChange() {
        this.setState({
            artists: getState()
        });
        // window.lazyLoadApi = $(document).imageLazyload({
        //     placeholder: require('../../../browser/images/loading.png'),
        //     autoDestroy: false,
        //     diff: 0
        // });
    }

    render() {

        let arrArtist = this.state.artists;
        let items = [], artist;
        // console.log(arrArtist);

        for(let key in arrArtist) {
            artist = arrArtist[key];
            items.push(
                <div className="mui-table-view-cell mui-media mui-col-xs-4" key={key}>
                    <a href={ artist.detailUrl } style={ aStyle }>
                        <img className="mui-media-object brad-50" data-lazyload={artist.photoUrl} style={ imgStyle }/>
                        <span className="mui-media-body text-flow" style={ spanStyle }>{artist.nickname}</span>
                    </a>
                </div>);
        }

        return(
            <div className="c-artist" style={ divStyle1 }>
                <div className="mui-text-center c-list-t">
                    <p>THE ARTIST LIST</p>
                    <h5>艺术家推荐榜</h5>
                </div>
                <div className="mui-table-view mui-grid-view" style={ divStyle2 }>
                    {items}
                </div>
            </div>
        );
    }

}

export default IndexArtist;