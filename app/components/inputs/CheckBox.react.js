'use strict';
import React, { Component } from 'react';

class CheckBox extends Component {

    constructor(props) {
        super(props);
        // let defaultValue = [];
        // if(typeof props.defaultValue === 'string') {
        //     defaultValue.push(props.defaultValue)
        // }
        this.state = {
            // value: defaultValue
            value: props.defaultValue
        };
    }

    componentWillMount() {
        if(this.props.value) {
            this.setState({
                value: this.props.value
            });
        }
    }

    handleChange(event) {
        
        let sel = event.target;
        let values = this.state.value;
        // 选中时
        if(sel.checked) {
            values = this.addValue(event.target.value);
        }
        // 未选中时
        else {
            values = this.delValue(event.target.value);
        }

        if(this.props.onChange) {
            this.props.onChange(event, values);
        }

        this.setState({
            value: values
        });
    }

    // 在数组中添加值
    addValue(value) {
        let values = this.state.value;
        values.push(value);
        return values;
    }
    
    // 在数组中删除值
    delValue(value) {
        let values = this.state.value;
        let i = 0, len = values.length;
        for(; i < len; i++) {
            if(values[i] === value) {
                values.splice(i, 1);
            }
        }
        return values;
    }

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

            let checked = false;
            let x = 0, len = value.length;
            for(; x < len; x++) {
                if(value[x] == child.props.value) {
                    checked = true;
                }
            }

            let label = (
                <div key={'label' + i} className={className + classNameChild}>
                    <label>
                        <input type='checkbox' 
                            className='' 
                            name={this.props.name} 
                            value={child.props.value} 
                            checked={checked} 
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

CheckBox.propTypes = {
    onChange: React.PropTypes.func,
    value: React.PropTypes.array,
    defaultValue: React.PropTypes.array
};
CheckBox.defaultProps = {
    defaultValue: []
};

export default CheckBox;