'use strict';

require('../../browser/javascript/mui');
require('../../browser/javascript/mui/mui.lazyload');
require('../../browser/javascript/mui/mui.lazyload.img');
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

import React, {Component} from 'React';

/* Public Components */
import More from '../../components/More/More.react';
import Fixed from '../../components/Fixed/Fixed.react';
import Footer from '../../components/Footer/Footer.react';
import OffCanvas from '../../components/OffCanvas/OffCanvas.react';
import OffCanvasContent from '../../components/OffCanvas/OffCanvasContent.react';
import OffCanvasBackDrop from '../../components/OffCanvas/OffCanvasBackDrop.react';
/* Page Components */
import AppTab from './AppTab.react';
import AppHeader from './AppHeader.react';
import AppSlider from './AppSlider.react';
import AppArtist from './AppArtist.react';
import AppTeacher from './AppTeacher.react';
import AppEveryOpus from './AppEveryOpus.react';
import AppFriendUpdate from './AppFriendUpdate.react';


let App = React.createClass({
    // 初始化
    getInitialState: function () {
        return {
            // 好友更新列表pageNo
            friendIndex: 0
        }
    },
    componentDidMount: function () {
        $.init({
            swipeBack: true //启用右滑关闭功能
        });
        window.lazyLoadApi = $(document).imageLazyload({
            placeholder: require('../../browser/images/loading.png'),
            autoDestroy: false,
            diff: 0
        });
    },
    setFriendState: function (n) {
        this.setState({
            friendIndex: n
        });
    },
    render: function () {
        return (
            <OffCanvas>
                {/* 页面顶部 */}
                <AppHeader />
                {/* 返回顶部 */}
                <Fixed />
                <OffCanvasContent>
                    {/* 轮播图 */}
                    <AppSlider />
                    {/* 分类切换 */}
                    <AppTab />
                    {/* 每日作品推荐 */}
                    <AppEveryOpus />
                    {/* 艺术家推荐榜 */}
                    <AppArtist />
                    {/* 名师点评推荐 */}
                    <AppTeacher />
                    {/* 好友更新 */}
                    <AppFriendUpdate
                        friendParent={ this.setFriendState }
                    />
                    {/* 加载更多 */}
                    <More
                        type="addFriends"
                        pageno={ this.state.friendIndex }
                    />
                    {/* 页面底部信息 */}
                    <Footer />
                </OffCanvasContent>
                <OffCanvasBackDrop />
            </OffCanvas>
        )
    }
});

ReactDOM.render(< App />, document.getElementById('offCanvas'));


