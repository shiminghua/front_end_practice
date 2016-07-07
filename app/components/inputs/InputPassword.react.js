'use strict';
import React, { Component } from 'react';

class InputPassword extends Component {

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
        this.setState({
            value: event.target.value.trim()
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
            <input type='password' 
                className={this.props.className} 
                name={this.props.name} 
                value={value} 
                placeholder={this.props.placeholder} 
                onChange={this.handleChange.bind(this)} />
        );
    }

}

InputPassword.defaultProps = {
    defaultValue: ''
};
InputPassword.propTypes = {
    onChange: React.PropTypes.func
};

export default InputPassword;