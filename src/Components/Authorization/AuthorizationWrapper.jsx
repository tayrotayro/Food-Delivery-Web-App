import React, { Component } from 'react';
import { Button } from 'antd';
import "../../Styling/AuthorizationWrapper.css"

class AuthorizationWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <div className="authorization-wrapper">
                <div className="image-column">
                    
                </div>
                <div className="login-column">
                    <Button type="primary">Primary</Button>
                </div>
            </div>
        )

    }
}

export default AuthorizationWrapper;