import React, { Component } from 'react';
import axios from "axios";
import {
    Form,
    Input,
    Button
} from 'antd';
import '../../style/AuthorizationWrapper.css'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            password: "",
            emailErrorMessage: ""
        }
    }

    submit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.sendSignUpRequest();
            }
        });
    }

    sendSignUpRequest = () => {
        axios.post('http://localhost:5000/api/user', {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        })
            .then(result => {
                const user = result.data.data;
                if (user) {
                    const userId = user._id;
                    localStorage.setItem("loggedInUserId", userId);
                    this.props.navigateToDashboard();
                } else {
                    this.setState({ emailErrorMessage: result.data.message })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { name, phone, email, password } = this.state;

        return (
            <div className="sign-up">
                <h1>Sign Up</h1>
                <Form>
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: 'Please input your full name!',
                            }],
                        })(
                            <Input
                                autoFocus
                                size="large"
                                placeholder="Full Name"
                                required
                                value={name}
                                onChange={(result) => {
                                    this.setState({ name: result.target.value })
                                }} />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('phone', {
                            rules: [{
                                required: true, message: 'Please input your phone number!',
                            }],
                        })(
                            <Input
                                size="large"
                                placeholder="Phone Number"
                                required
                                value={phone}
                                onChange={(result) => {
                                    this.setState({ phone: result.target.value })
                                }} />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'Please input a valid email!',
                            }, {
                                required: true, message: 'Please input your email!',
                            }],
                        })(
                            <Input
                                size="large"
                                placeholder="Email"
                                required
                                value={email}
                                error={this.state.error}
                                onChange={(result) => {
                                    this.setState({ email: result.target.value })
                                }} />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please input your password!',
                            }],
                        })(
                            <Input
                                size="large"
                                placeholder="Password"
                                type="password"
                                required
                                value={password}
                                onChange={(result) => {
                                    this.setState({ password: result.target.value })
                                }} />
                        )}
                    </Form.Item>
                    <div className="sign-up-button">
                        <Button type="primary" onClick={this.sendSignUpRequest}>Sign Up</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

const WrappedSignUpForm = Form.create({ name: 'signup-form' })(SignUpForm);

export default WrappedSignUpForm;