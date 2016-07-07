'use strict';
import React, { Component } from 'react';

class TextArea extends Component {

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
            <textarea 
                className={this.props.className} 
                value={value} 
                placeholder={this.props.placeholder} 
                name={this.props.name} 
                onChange={this.handleChange.bind(this)}></textarea>
        );

    }

}

TextArea.propTypes = {
    onChange: React.PropTypes.func
};
TextArea.defaultProps = {
    defaultValue: ''
}

export default TextArea;