'use strict';
import React, { Component } from 'react';
import InputText from '../../../components/inputs/InputText.react';
import InputPassword from '../../../components/inputs/InputPassword.react';

import '../../../browser/javascript/mui';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pass: ''
        };
    }

    handleChange(event) {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {

        event.preventDefault();
        console.log(this.state);

        mui.ajax('/author/login', {
            type: 'post',
            data: this.state,
            dataType: 'json',
            success: function(data) {
                if(data.code === 200) {
                    console.log('login success');
                    window.location.href = '/';
                }
                else {
                    console.log(data.message);
                }
            },
            error: function() {
                console.log('login error');
            }
        });

    }

    render() {

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <InputText className='' name='name' onChange={this.handleChange.bind(this)} placeholder='请输入手机号码或邮箱' />
                <InputPassword className='' name='pass' onChange={this.handleChange.bind(this)} placeholder='请输入密码' />
                <button type="submit">提交</button>
            </form>
        );

    }

}

export default Login;