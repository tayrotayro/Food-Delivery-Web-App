import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox, Empty, Card
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Sign-In">
                <div className="Authorization-Header" >
                    <h1>Deliverd 2 U</h1>
                </div>
                <Card >
                    <Form className="login-form">
                        <Form.Item>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </Form.Item>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}


export default SignInForm;