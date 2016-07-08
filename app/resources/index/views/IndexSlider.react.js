'use strict';
import React, {Component} from 'react';

/****************
 * 首页图片轮播
*/
class IndexSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {
        // $('#slider').slider({
        //     interval: 5000
        // });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div id="slider" className="mui-slider">
                {/* 循环轮播：mui-slider-loop */}
                <div className="mui-slider-group">
                    {/* 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) 
                    <div className="mui-slider-item mui-slider-item-duplicate">
                        <a href='#'><img src='http://img.modouyu.net/201606/15/other/1465957493.jpg' alt='' /></a>
                    </div>    
                    */}
                    {/* 第一张图 */}
                    <div className="mui-slider-item">
                        <a href='#'><img src='http://img.modouyu.net/201606/14/other/1465886445.jpg' alt='' /></a>
                    </div>
                    {/* 第二张图 */}
                    <div className="mui-slider-item">
                        <a href='#'><img src='http://img.modouyu.net/201606/14/other/1465886475.jpg' alt='' /></a>
                    </div>
                    {/* 第三张图 */}
                    <div className="mui-slider-item">
                        <a href='#'><img src='http://img.modouyu.net/201606/15/other/1465957493.jpg' alt='' /></a>
                    </div>
                    {/* 额外增加的一个节点(循环轮播：第一个节点是第一张轮播) 
                    <div className="mui-slider-item mui-slider-item-duplicate">
                        <a href='#'><img src='http://img.modouyu.net/201606/14/other/1465886445.jpg' alt='' /></a>
                    </div>    
                    */}
                </div>
                <div className="mui-slider-indicator">
                    <div className='mui-indicator mui-active'></div>
                    <div className='mui-indicator'></div>
                    <div className='mui-indicator'></div>
                </div>
            </div>
        );
    }

}



export default IndexSlider;