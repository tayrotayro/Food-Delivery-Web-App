import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox, Card, Select, Switch, Row, Col
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import '../../Styling/AuthorizationWrapper.css'

const { Option } = Select;

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    /* hello */
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
                        <Form.Item>
                            <Select placeholder="Please select an Account Type" required>
                                <Option value="">Driver</Option>
                                <Option value="">Customer</Option>
                            </Select>
                        </Form.Item>
                        <div className="sign-up-button">
                            <Button type="primary">Sign Up</Button>
                        </div>
                    </Form>
                </Card>
            </div >
        )
    }
}

export default SignUpForm;