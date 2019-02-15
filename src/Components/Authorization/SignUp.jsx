import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox, Card, Select, Switch, Divider
} from 'antd';
import '../../Styling/AuthorizationWrapper.css'

const { Option } = Select;

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="sign-up">
                <Card style={{ width: 350 }}>
                    <h3>Sign Up</h3>
                    <Form className="">
                        <Form.Item>
                            <Input placeholder="Name" Icon="email" required />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Email" Icon="email" required />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Password" Icon="email" required />
                        </Form.Item>
                        <div className="sign-up-button">
                            <Button type="primary">Sign Up</Button>
                        </div>
                    </Form>
                    <Divider />
                    <p>Already have an account?</p>
                </Card>
            </div >
        )
    }
}

export default SignUpForm;