'use strict';

import React, {Component} from 'React';

module.exports = React.createClass({
    // 初始化
    getInitialState: function () {
        $.init({
            swipeBack: true //启用右滑关闭功能
        });
        return {
            sliderImg: [
                'http://img.modouyu.net/201606/14/other/1465886445.jpg',
                'http://img.modouyu.net/201606/14/other/1465886475.jpg',
                'http://img.modouyu.net/201606/15/other/1465957493.jpg'
            ]
        }
    },
    // 插入DOM之后
    componentDidMount: function () {
        $('#slider').slider({
            interval: 3000
        });
    },
    render: function () {
        return (
            <div id="slider" className="mui-slider">
                <div className="mui-slider-group mui-slider-loop">
                    <div className="mui-slider-item mui-slider-item-duplicate">
                        <a href={ 'javascript:;' }>
                            <img src={ this.state.sliderImg[this.state.sliderImg.length - 1] }/>
                        </a>
                    </div>
                    {
                        React.Children.map(this.state.sliderImg, function (v, i, a) {
                            return (
                                <div className="mui-slider-item">
                                    <a href={ 'javascript:;' }>
                                        <img src={ v } />
                                    </a>
                                </div>
                            )
                        })
                    }
                    <div className="mui-slider-item mui-slider-item-duplicate">
                        <a href={ 'javascript:;' }>
                            <img src={ this.state.sliderImg[0] }/>
                        </a>
                    </div>
                </div>
                <div className="mui-slider-indicator">
                    {
                        React.Children.map(this.state.sliderImg, function (v, i, a) {
                            return(
                                <div className={ (i == 0 ? 'mui-active' : '') + ' mui-indicator' }></div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
});





