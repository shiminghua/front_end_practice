'use strict';
import React, {Component} from 'react';
import TeacherStore from '../stores/TeacherStore';
import TeacherUtil from '../utils/TeacherUtil';
import WebUtil from '../utils/webutil';

TeacherUtil.getData();

import '../../../browser/javascript/mui';
import '../../../browser/javascript/mui/mui.lazyload';
import '../../../browser/javascript/mui/mui.lazyload.img';

let pStyle1 = { 'textIndent': '0px','fontSize': '14px','color': '#4D4D4D','whiteSpace': 'initial','minHeight': '42px' };

function getTeachers() {
    return TeacherStore.getAll()
}

/***************
 * 名师点评
*/
class IndexTeacher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teachers: getTeachers()
        };
    }

    componentDidMount() {
        TeacherStore.addChangeListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        TeacherStore.removeChangeListener(this.onChange.bind(this));
    }

    onChange() {
        this.setState({
            teachers: getTeachers()
        });
        window.lazyLoadApi = $(document).imageLazyload({
            placeholder: require('../../../browser/images/loading.png'),
            autoDestroy: false,
            diff: 0
        });
    }

    render() {

        let arrTeacher = this.state.teachers;
        let items = [];

        for(let key in arrTeacher) {

            let teacher = arrTeacher[key];
            // console.log(teacher.comments);
            let url = WebUtil.initUrl(teacher.comments.work.worksImage.path);
            let content = WebUtil.initText(teacher.comments.content, 25);
            items.push(
                <li className="mui-table-view-cell mui-media" key={key}>
                    <a href='#'>
                        <img className="mui-media-object mui-pull-left" style={{ 'width': '100%', 'maxWidth': '120px','height': '80px' }} data-lazyload={url} />
                        <div className="mui-media-body" style={{ 'marginBottom': '5px' }}>
                            <span style={{ 'fontSize': '12px','color': '#6F6F6F' }}>{teacher.comments.user.nickname}</span>
                            <p style={ pStyle1 }>{content}</p>
                        </div>
                        <div style={{ 'height': '24px' }}>
                            <p className="mui-pull-right" style={{ 'textIndent': '0px' }}>
                                <span className="mui-icon iconfont icon-like icon-like-aux"
                                        style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                </span>
                                <span>{teacher.comments.clicklikenum}</span>
                                <span style={{ 'margin': '0 3px','position': 'relative','top': '-1px' }}>∣</span>
                                <span className="mui-icon iconfont icon-reply icon-reply-aux"
                                        style={{ 'marginLeft': '0px','paddingRight': '5px' }}>
                                </span>
                                <span>{teacher.comments.replynum}</span>
                            </p>
                        </div>
                    </a>
                </li>
            );

        }

        return(
            <div className="c-teacher">
                <div className="mui-text-center c-list-t">
                    <p>TEACHER REVIEWS RECOMMENDED</p>
                    <h5>名师点评推荐</h5>
                </div>
                <ul className="mui-table-view">
                    {items}
                </ul>
            </div>
        );

    }

}

export default IndexTeacher;