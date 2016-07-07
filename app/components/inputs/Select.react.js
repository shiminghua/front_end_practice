'use strict';
import React, { Component } from 'react';

class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue
        };
    }

    handleChange(event) {
        if(this.props.onChange) {
            this.props.onChange(event);
        }
        console.log(event.target.value);
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

    render() {

        let value = this.state.value;

        return (
            <select 
                className={this.props.className} 
                value={value} 
                name={this.props.name} 
                onChange={this.handleChange.bind(this)}>
                {this.props.children}
            </select>
        );

    }

}

Select.propTypes = {
    onChange: React.PropTypes.func
};
Select.defaultProps = {
    defaultValue: ''
};

export default Select;