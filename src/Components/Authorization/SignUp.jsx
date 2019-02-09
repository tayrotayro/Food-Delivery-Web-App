import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox, Card
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import '../../Styling/AuthorizationWrapper.css'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="sign-up">
                <Card style={{width: 350}}>
                    <h3>Sign Up</h3>
                    <Form className="">
                        <Form.Item>
                           <Input placeholder="Name" Icon="email"/> 
                        </Form.Item>
                        <Form.Item>
                           <Input placeholder="Email" Icon="email"/> 
                        </Form.Item>
                        <Form.Item>
                           <Input placeholder="Password" Icon="email"/> 
                        </Form.Item>
                        <div className="sign-up-button">
                        <Button type="primary">Sign Up</Button>
                        </div>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default SignUpForm;