import React from 'react';
import {API_ROOT} from "./constants";
import { Form, Icon, Input, Button, message,} from 'antd';
import { Link } from 'react-router-dom';

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSuccessfulLogin("123");
    // this.props.form.validateFields((err, values) => {
    // if (!err) {
    //   console.log('Received values of form: ', values);
    //   //send request
    //   fetch(`${API_ROOT}/login`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       username: values.username,
    //       password: values.password,
    //     })
    //   }).then((response) => {
    //     if(response){
    //       return response.text();
    //     }
    //     throw new Error(response.statusText);
    //   }).then((data) => {
    //     message.success('Registration Success');
    //   }).catch((err) => {
    //     console.log(err);
    //     message.error('Registration Fail');
    //   });
    // }
    // });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item className=".login-form">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item className=".login-form">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="default" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
    );
  }
}

export const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

