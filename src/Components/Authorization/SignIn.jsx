import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox, Card
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import '../../Styling/AuthorizationWrapper.css';
import axios from 'axios';



class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    submit = (event) => {
        event.preventDefault(); // Stop the page from refreshing
        axios.post(`http://localhost:5000/api/signin`, {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                const user = response.data.data;
                const userId = user._id
                localStorage.setItem("loggedInUserId", userId);
                this.props.navigateToDashboard();
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: true
                })
            });
    }

    render() {
        return (
            <div className="sign-in">
                <Card style={{ width: 350 }}>
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
                        <Button type="primary" onClick={this.submit}>Sign In</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}


export default SignInForm;