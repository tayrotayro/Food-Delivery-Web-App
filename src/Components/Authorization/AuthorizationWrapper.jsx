import React, { Component } from 'react';
import { Button, Empty } from 'antd';
import "../../Styling/AuthorizationWrapper.css"
import SignInForm from "../Authorization/SignIn";
import SignUpForm from './SignUp';

class AuthorizationWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSignInForm: true
        }
    }
    render() {
        return (
            <div className="authorization-wrapper">
                <div className="image-column">

                </div>
                <div className="login-column">
                    <div className="authorization-header" >
                        <h1>Deliverd 2 U</h1>
                    </div>
                    {
                        this.state.onSignInForm === true
                        &&
                        <div>
                            <SignInForm />
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
                            <SignUpForm />
                            <Button type="secondary" block
                                onClick={() => this.setState({
                                    onSignInForm: true
                                })}
                            >Sign In</Button>
                        </div>
                    }

                </div>
            </div>
        )

    }
}

export default AuthorizationWrapper;