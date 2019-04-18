import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Divider } from 'antd';
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

    navigateToViewPicker = () => {
        this.props.history.push('/view-picker');
    }

    render() {
        if (localStorage.getItem('loggedInUserId')) {
            return <Redirect to="/view-picker" />
        }
        //TODO: write else statement to redirect to authentication

        return (
            <div className="authorization-wrapper">
                <div className="authorization-header">
                    <div className="logo">Delivrd</div>
                </div>
                {
                    this.state.onSignInForm === true
                    &&
                    <Card className="authorization-card">
                        <SignInForm navigateToViewPicker={this.navigateToViewPicker} />
                        <Divider />
                        <div className="form-toggle-button">
                            <a onClick={() => this.setState({ onSignInForm: false })}>Not a member? - Create account</a>
                        </div>
                    </Card>
                }
                {
                    this.state.onSignInForm !== true
                    &&
                    <Card className="authorization-card">
                        <SignUpForm navigateToViewPicker={this.navigateToViewPicker} />
                        <Divider />
                        <div className="form-toggle-button">
                            <a onClick={() => this.setState({ onSignInForm: true })}>Already have an account? - Sign in</a>
                        </div>
                    </Card>
                }
            </div>
        )
    }
}

export default AuthorizationWrapper;