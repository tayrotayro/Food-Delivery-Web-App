import React, { Component } from 'react';
import { Button, Empty } from 'antd';
import "../../Styling/AuthorizationWrapper.css"
import SignInForm from  "../Authorization/SignIn";

class AuthorizationWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="authorization-wrapper">
                <div className="image-column">

                </div>
                <div className="login-column">
                   <SignInForm />
                </div>
            </div>
        )

    }
}

export default AuthorizationWrapper;