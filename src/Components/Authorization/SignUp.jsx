import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox, Card
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="sign-up">
                <Card>
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
                        <Button type="primary">Sign Up</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default SignUpForm;