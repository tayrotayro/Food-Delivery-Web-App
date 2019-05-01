import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import './style.css';

class DriverProfileWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    navigateToUser = () => {
        this.props.history.push('/');
    }

    navigateToCreateRestaurant = () => {
        this.props.history.push('/owner-create-restaurant')
    }

    render() {
        return (

            <div className="profile-wrapper">
                <h1>Driver Profile</h1>

                <div className="profile-change-view"
                    style={{ padding: "35px", paddingTop: "15px", paddingBottom: "15px" }}>
                    <Button type="danger" size="large" block onClick={this.navigateToUser}>Exit Driver View</Button>
                </div>

            </div>

        )
    }
}



export default DriverProfileWrapper;