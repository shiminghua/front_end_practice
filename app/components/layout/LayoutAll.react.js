'use strict';
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
        // $('.mui-scroll-wrapper').scroll();
        // $.init({
        //     swipeBack: true //启用右滑关闭功能
        // });
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