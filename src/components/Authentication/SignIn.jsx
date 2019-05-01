import React, { Component } from 'react';
import {
    Form,
    Icon,
    Input,
    Button
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import '../../style/AuthorizationWrapper.css';
import axios from 'axios';
import "./style.css";

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false,
            errorMessage: ""
        }
    }

    submit = (event) => {
        console.log('a')
        event.preventDefault(); // Stop the page from refreshing
        if (this.state.email === "") {
            this.setState({
                error: true
            })
        } else if (this.state.password === "") {
            this.setState({
                error: true
            })
        } else {

            axios.post(`http://localhost:5000/api/signin`, {
                email: this.state.email,
                password: this.state.password
            })
                .then(response => {
                    if (response.data.error) {
                        this.setState({ error: true, errorMessage: response.data.error })
                    } else {
                        const user = response.data.data;
                        const userId = user._id
                        localStorage.setItem("loggedInUserId", userId);
                        this.props.navigateToViewPicker();
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ error: true })
                });
        }
    }

    render() {
        return (
            <div className="sign-in">
                <h1>Sign In</h1>

                <Form>
                    <Form.Item
                        hasFeedback
                        validateStatus={this.state.error ? "error" : null}
                        help={this.state.error ? this.state.errorMessage : null}
                    >
                        <Input
                            prefix={< Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            autoFocus
                            size="large"
                            placeholder="Email"
                            onChange={(result) => {
                                this.setState({ email: result.target.value })
                            }} />
                    </Form.Item>
                    <FormItem
                        hasFeedback
                        validateStatus={this.state.error ? "error" : null}
                        help={this.state.error ? this.state.errorMessage : null}
                    >
                        <Input
                            prefix={< Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            size="large"
                            placeholder="Password"
                            onChange={(result) => {
                                this.setState({ password: result.target.value })
                            }} />
                    </FormItem>
                    <div className="sign-in-button">
                        <Button type="primary" htmlType="submit" onClick={this.submit}>Sign In</Button>
                    </div>
                </Form>
                {/* <div className="forgot">
                        <a href="">Forgot Password?</a>
                    </div> */}
            </div>
        )
    }
}

export default SignInForm;