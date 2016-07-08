'use strict';
/** mui */
import '../../browser/javascript/mui';
import '../../browser/javascript/mui/mui.lazyload';
import '../../browser/javascript/mui/mui.lazyload.img';
/*
require('../../browser/javascript/mui/mui');
require('../../browser/javascript/mui/mui.init');
require('../../browser/javascript/mui/mui.class');
require('../../browser/javascript/mui/mui.detect');
require('../../browser/javascript/mui/mui.namespace');
require('../../browser/javascript/mui/mui.class.scroll');
require('../../browser/javascript/mui/mui.class.scroll.pullrefresh');

require('../../browser/javascript/mui/mui.ajax');
require('../../browser/javascript/mui/mui.event');

require('../../browser/javascript/mui/mui.target');
require('../../browser/javascript/mui/mui.gestures');

require('../../browser/javascript/mui/mui.gestures.tap');
require('../../browser/javascript/mui/mui.dialog.toast');

require('../../browser/javascript/mui/sliders');
require('../../browser/javascript/mui/mui.class.scroll.slider');
*/

import React, {Component} from 'react';
/* Public Components */
import Wrap from './Wrap.react';
import Aside from './Aside.react';
import Main from './Main.react';
import Content from './Content.react';
import Header from '../header/Header.react';
import BackTop from '../btns/BackTop.react';
import Footer from '../footer/Footer.react';


class LayoutAll extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        $('.mui-scroll-wrapper').scroll();
        $.init({
            swipeBack: true //启用右滑关闭功能
        });
        window.lazyLoadApi = $(document).imageLazyload({
            placeholder: require('../../browser/images/loading.png'),
            autoDestroy: false,
            diff: 0
        });
    }

    componentWillUnmount() {



    }

    render() {

        return (
            <Wrap>
                { /* 左侧侧滑导航 */ }
                <Aside />
                { /* 主体内容 */ }
                <Main>
                    { /* 页头 */ }
                    <Header />
                    { /* 主要内容 */ }
                    <Content>
                        {this.props.children}
                        { /* 页脚 */ }
                        <Footer />
                    </Content>
                    { /* 返回顶部 */ }
                    <BackTop />
                </Main>
            </Wrap>
        );

    }

}

LayoutAll.defaultProps = {};

export default LayoutAll;