import React, { Component } from 'react';
import axios from "axios";
import {
    Form, Icon, Input, Button, Checkbox, Card, Select, Switch, Divider
} from 'antd';
import '../../Styling/AuthorizationWrapper.css'

const { Option } = Select;

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            phone:"",
            email: "",
            password:"",
            emailErrorMessage: ""
        }
    }

    submit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/user', {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        })
        .then(result => {
            console.log(result);
            const user = result.data.data;
            if (user) {
                const userId = user._id;
                localStorage.setItem("loggedInUserId", userId);
                this.props.navigateToDashboard();
            } else {
                this.setState({
                    emailErrorMessage: result.data.message
                })
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { name } = this.state;
        const { phone } = this.state;
        const { email } = this.state;
        const { password } = this.state;
        return (
            <div className="sign-up">
                <Card style={{ width: 350 }}>
                    <h3>Sign Up</h3>
                    <Form className="">
                        <Form.Item>
                            <Input placeholder="Name" required value={name} 
                            onChange={(result) => {
                                this.setState({
                                    name: result.target.value
                                })
                            }} />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Phone Number" required value={phone}
                            onChange={(result) => {
                                this.setState({
                                    phone: result.target.value
                                })
                            }} />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Email" required value={email} error={this.state.error}
                            onChange={(result) => {
                                this.setState({
                                    email: result.target.value
                                })
                            }} />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Password" required value={password} 
                            onChange={(result) => {
                                this.setState({
                                    password: result.target.value
                                })
                            }} />
                        </Form.Item>
                        <div className="sign-up-button">
                            <Button type="primary" onClick={this.submit}>Sign Up</Button>
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