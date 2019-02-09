import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox, Card
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import '../../Styling/AuthorizationWrapper.css';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <div className="sign-in">
                <Card >
                    <h3>Sign In</h3>
                    <Form className="login-form">
                        <Form.Item >
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                placeholder="Username" 
                                onChange={(result) => { 
                                    this.setState({
                                        username: result.target.value
                                    })
                                }} 
                            />
                        </Form.Item>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type="password"
                                placeholder="Password"
                                onChange={(result) => { 
                                    this.setState({
                                        password: result.target.value
                                    })
                                }} 
                              />
                        </FormItem>
                        <Button type="primary">Sign In</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}


export default SignInForm;