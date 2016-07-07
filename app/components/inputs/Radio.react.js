'use strict';
import React from 'react';

/*********************
 * 单选按钮公共插件
*/
class Radio extends React.Component {

    // 构造函数
    constructor(props) {
        super(props);
        // 设置默认状态
        this.state = {
            value: props.defaultValue
        };
    }

    // change事件
    handleChange(event) {

        if(this.props.onChange) {
            this.props.onChange(event);
        }
        // 设置默认状态
        this.setState({
            value: event.target.value
        });

    }

    componentWillMount() {
        if(this.props.value) {
            this.setState({
                value: this.props.value
            });
        }
    }

    // render
    render() {

        let children = {};
        let value = this.state.value;
        let className = '';
        if(this.props.className) {
            className = this.props.className;
        }

        React.Children.forEach(this.props.children, function(child, i) {

            let classNameChild = '';
            if(child.props.className) {
                classNameChild = ' ' + child.props.className;
            }
            let label = (
                <div key={'label' + i} className={className + classNameChild}>
                    <label>
                        <input type='radio' 
                            className='' 
                            name={this.props.name} 
                            value={child.props.value} 
                            checked={child.props.value == value} 
                            onChange={this.handleChange.bind(this)} />
                        {child.props.children}
                    </label>
                </div>
            );

            children['label' + i] = label;

        }.bind(this));

        let arrChildren = [];
        for(let key in children) {
            arrChildren.push(children[key]);
        }

        return <span>{arrChildren}</span>

    }

}

// 属性验证
Radio.propTypes = {
    onChange: React.PropTypes.func
};
// 设置默认属性
Radio.defaultProps = {
    defaultValue: ''
};

export default Radio;