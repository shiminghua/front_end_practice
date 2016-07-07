'use strict';
import React from 'react';
import Radio from '../../../components/inputs/Radio.react';
import CheckBox from '../../../components/inputs/CheckBox.react';
import InputText from '../../../components/inputs/InputText.react';
import TextArea from '../../../components/inputs/TextArea.react';
import Select from '../../../components/inputs/Select.react';
import InputPassword from '../../../components/inputs/InputPassword.react';

let divStyle = {
    paddingTop: '20px'
};

class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            my_radio: 'radio3', // key 值对应组件的name值
            my_name: 'name',
            my_company: 'company',
            my_textarea: 'textarea',
            my_checkbox: ['checkbox2', 'checkbox3'],
            my_select: 'select2',
            my_pass: 'pass'
        };
    }

    // 提交函数
    submitHandler(event) {
        event.preventDefault();
        // console.log(this);
        let values = [];
        for(let key in this.state) {
            values += key + ':' + this.state[key] + '\n\r';
        }
        alert(values);
    }

    // change事件
    handleChange(event, values) {
        // console.log(values)
        let newState = {};
        if(values) {
            newState[event.target.name] = values;
        }
        else {
            newState[event.target.name] = event.target.value;
        }
        this.setState(newState);
    }

    // checkbox change 事件
    handleChangeCheckbox(event, values) {
        let newState = {};
        newState[event.target.name] = values;
        this.setState(newState);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler.bind(this)}>
                <h1>my form</h1>
                <div style={ divStyle }>
                    单选按钮：
                    <Radio ref='radio' className='mui-input-row mui-radio' name='my_radio' onChange={this.handleChange.bind(this)} value={this.state.my_radio}>
                        <option value='radio1'>first option</option>
                        <option value='radio2'>second option</option>
                        <option value='radio3'>third option</option>
                    </Radio>
                </div>
                <div style={ divStyle }>
                    复选按钮：
                    {
                        /* defaultValue={['checkbox1', 'checkbox2']}
                        defaultValue={this.state.my_checkbox} 设置默认值 */ 
                    }
                    <CheckBox ref='radio' className='mui-input-row mui-checkbox' name='my_checkbox' onChange={this.handleChange.bind(this)} value={this.state.my_checkbox}>
                        <option value='checkbox1'>first checkbox</option>
                        <option value='checkbox2'>second checkbox</option>
                        <option value='checkbox3'>third checkbox</option>
                    </CheckBox>
                </div>
                <div style={ divStyle }>
                    下拉菜单：
                    {
                        /* defaultValue={this.state.my_select} 设置默认值 */ 
                    }
                    <Select name='my_select' onChange={this.handleChange.bind(this)} value={this.state.my_select}>
                        <option value='select1'>first select</option>
                        <option value='select2'>second select</option>
                        <option value='select3'>third select</option>
                    </Select>
                </div>
                <div>
                    文本框：
                    <InputText name='my_name' className='my-name' onChange={this.handleChange.bind(this)} placeholder='my name' value={this.state.my_name} />
                </div>
                <div>
                    文本框：
                    <InputText name='my_company' className='my-company' onChange={this.handleChange.bind(this)} placeholder='my company' value={this.state.my_company} />
                </div>
                <div>
                    密码框：
                    <InputPassword name='my_pass' className='my-pass' onChange={this.handleChange.bind(this)} placeholder='my pass' value={this.state.my_pass} />
                </div>
                <div>
                    文本域：
                    <TextArea name='my_textarea' className='my-textarea' onChange={this.handleChange.bind(this)} placeholder='my textarea' value={this.state.my_textarea} />
                </div>
                {
                    // <input type="submit" value="提交" />
                }
                <button type="submit" className='mui-btn mui-btn-primary mui-btn-outlined'>提交</button>
            </form>
        );
    }

}

export default MyForm;