import React from 'react';

import {
  Form, Input, message, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
// import {API_ROOT} from "./constants"

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    message.success('Registration Succeed!');
    this.props.history.push('/login');

    // this.props.form.validateFieldsAndScroll((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //     //send request
    //     // fetch(`${API_ROOT}/signup`, {
    //     //   method: 'POST',
    //     //   body: JSON.stringify({
    //     //     username: values.username,
    //     //     password: values.password,
    //     //   })
    //     // }).then((response) => {
    //     //   if(response){
    //     //     return response.text();
    //     //   }
    //     //   throw new Error(response.statusText);
    //     // }).then((data) => {
    //     //   console.log(data);
    //     //   message.success('Registration Success');
    //     // }).catch((err) => {
    //     //   console.log(err);
    //     //   message.error('Registration Fail');
    //     // });
    //   }
    // });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };


    return (
        <Form onSubmit={this.handleSubmit} className="Register">
          <Form.Item
              {...formItemLayout}
              label='Username'
          >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input />
            )}
          </Form.Item>
          <Form.Item
              {...formItemLayout}
              label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
                <Input type="password" />
            )}
          </Form.Item>
          <Form.Item
              {...formItemLayout}
              label="Confirm Password"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
        </Form>
    );
  }
}

export const Register = Form.create({ name: 'register' })(RegistrationForm);
