'use strict';
/* mui */
import '../../browser/javascript/mui';
import '../../browser/javascript/mui/mui.lazyload';
import '../../browser/javascript/mui/mui.lazyload.img';
/*require('../../browser/javascript/mui/mui');
 require('../../browser/javascript/mui/mui.init');
 require('../../browser/javascript/mui/mui.class');
 require('../../browser/javascript/mui/mui.detect');
 require('../../browser/javascript/mui/mui.namespace');
 require('../../browser/javascript/mui/mui.class.scroll');
 require('../../browser/javascript/mui/mui.class.scroll.pullrefresh');*/

/*require('../../browser/javascript/mui/mui.ajax');
 require('../../browser/javascript/mui/mui.event');*/

/*require('../../browser/javascript/mui/mui.target');
 require('../../browser/javascript/mui/mui.gestures');*/

/*require('../../browser/javascript/mui/mui.gestures.tap');
 require('../../browser/javascript/mui/mui.dialog.toast');*/

/*require('../../browser/javascript/mui/sliders');
 require('../../browser/javascript/mui/mui.class.scroll.slider');*/

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/* Public Components */
import LayoutAll from '../../components/layout/LayoutAll.react';
/* Page Components */
import IndexSlider from './views/IndexSlider.react';
import IndexTab from './views/IndexTab.react';
import IndexEveryOpus from './views/IndexEveryOpus.react';
import IndexArtist from './views/IndexArtist.react';
import IndexTeacher from './views/IndexTeacher.react';
import IndexFriendUpdate from './views/IndexFriendUpdate.react';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        $.init({
            swipeBack: true //启用右滑关闭功能
        });
        $('.mui-scroll-wrapper').scroll();
        // window.lazyLoadApi = $(document).imageLazyload({
        //     placeholder: require('../../browser/images/loading.png'),
        //     autoDestroy: false,
        //     diff: 0
        // });
    }

    componentWillUnmount() {



    }

    render() {

        return (
            <LayoutAll>
                {/* 图片轮播 */}
                <IndexSlider />
                {/* 按钮 - 书法、绘画、摄影 */}
                <IndexTab />
                {/* 每日作品推荐 */}
                <IndexEveryOpus />
                {/* 艺术家推荐榜 */}
                <IndexArtist />
                {/* 名师点评推荐 */}
                <IndexTeacher />
                {/* 好友更新 */}
                { this.props.isLogin === 1 ? <IndexFriendUpdate /> : '' }
            </LayoutAll>
        );

    }

}

Index.defaultProps = {
    isLogin: window.NODE_VALUE.isLogin
};

// console.log(window.NODE_VALUE.isLogin)

ReactDOM.render(<Index />, document.getElementById('offCanvas'));


