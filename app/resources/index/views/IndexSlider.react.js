'use strict';
import React, {Component} from 'react';
import SliderStore from '../stores/SliderStore';
import Slider from '../utils/slider';

Slider.initSliderData();

/****************
 * 首页图片轮播
*/
class IndexSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            sliders: SliderStore.getAll()
        };
    }

    componentDidMount() {
        SliderStore.addChangeListener(this.onSliderChange.bind(this));
    }

    componentWillUnmount() {
        SliderStore.addChangeListener(this.onSliderChange.bind(this));
    }

    onSliderChange() {
        this.setState({
            sliders: SliderStore.getAll()
        });
        //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
            interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
        });
    }

    render() {

        let arrImg = this.state.sliders;
        let i = 0;
        let items = [], indicators = [];

        for(let key in arrImg) {
            items.push(<div className="mui-slider-item" key={key}>
                        <a href={arrImg[key].workDetailPage}><img src={arrImg[key].imageurl} alt='' /></a>
                    </div>);
            if(i === 0) {
                indicators.push(<div className='mui-indicator mui-active' key={key + 1}></div>);
            }
            else {
                indicators.push(<div className='mui-indicator' key={key + 1}></div>);
            }
            i++;
        }

        return (
            <div id="slider" className="mui-slider" style={{ minHeight: '100px' }}>
                {/* 循环轮播：mui-slider-loop */}
                <div className="mui-slider-group">
                    {/* 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) 
                    <div className="mui-slider-item mui-slider-item-duplicate">
                        <a href='#'><img src='http://img.modouyu.net/201606/15/other/1465957493.jpg' alt='' /></a>
                    </div>    
                    */}
                    {/*
                    第一张图
                    <div className="mui-slider-item">
                        <a href='#'><img src='http://img.modouyu.net/201606/14/other/1465886445.jpg' alt='' /></a>
                    </div>
                    第二张图
                    <div className="mui-slider-item">
                        <a href='#'><img src='http://img.modouyu.net/201606/14/other/1465886475.jpg' alt='' /></a>
                    </div>
                    第三张图
                    <div className="mui-slider-item">
                        <a href='#'><img src='http://img.modouyu.net/201606/15/other/1465957493.jpg' alt='' /></a>
                    </div>    
                    */}
                    {/* 额外增加的一个节点(循环轮播：第一个节点是第一张轮播) 
                    <div className="mui-slider-item mui-slider-item-duplicate">
                        <a href='#'><img src='http://img.modouyu.net/201606/14/other/1465886445.jpg' alt='' /></a>
                    </div>    
                    */}
                    {items}
                </div>
                <div className="mui-slider-indicator">
                    {/*
                    <div className='mui-indicator mui-active'></div>
                    <div className='mui-indicator'></div>
                    <div className='mui-indicator'></div>    
                    */}
                    {indicators}
                </div>
            </div>
        );
    }

}



export default IndexSlider;