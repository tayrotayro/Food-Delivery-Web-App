import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import "../../style/AuthorizationWrapper.css"
import SignInForm from "./SignIn";
import SignUpForm from './SignUp';

class AuthorizationWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSignInForm: true
        }
    }

    navigateToDashboard = () => {
        this.props.history.push('/');
    }

    render() {
        if (localStorage.getItem('loggedInUserId')) {
            return <Redirect to="/" />
        }
    

        return (
            <div className="authorization-wrapper">
                <div className="authorization-header">
                    <h1>Delivrd</h1>
                </div>
                {
                    this.state.onSignInForm === true
                    &&
                    <div>
                        <SignInForm navigateToDashboard={this.navigateToDashboard} />
                        <Button type="secondary" block
                            onClick={() => this.setState({
                                onSignInForm: false
                            })}
                        >Not a Member?</Button>
                    </div>
                }
                {
                    this.state.onSignInForm !== true
                    &&
                    <div>
                        <SignUpForm navigateToDashboard={this.navigateToDashboard} />
                        <Button type="secondary" block
                            onClick={() => this.setState({
                                onSignInForm: true
                            })}
                        >Sign In</Button>
                    </div>
                }
            </div>
        )
    }
}

export default AuthorizationWrapper;