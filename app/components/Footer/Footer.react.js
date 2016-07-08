'use strict';
import React, {Component} from 'react';

/*
 * 页面底部信息组件
 * */
class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer className="page-footer">
                <p>墨斗鱼版权所有</p>
                <p>Copyright : 2016 MODOUYU.NET 京ICP备15026862号</p>
            </footer>
        )
    }

}

export default Footer;