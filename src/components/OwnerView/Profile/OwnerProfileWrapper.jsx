import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button, Divider } from 'antd';
import './style.css';

class OwnerProfileWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createRestaurant: false
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
                <h1>Owner Profile</h1>
                <div className="profile-change-view"
                    style={{ padding: "35px", paddingTop: "15px", paddingBottom: "15px" }}>
                    <Button type="primary" size="large" block onClick={this.navigateToCreateRestaurant}>Add New Restaurant</Button>
                </div>
                <div className="profile-change-view"
                    style={{ padding: "35px", paddingTop: "15px", paddingBottom: "15px" }}>
                    <Button type="danger" size="large" block onClick={this.navigateToUser}>Exit Owner View</Button>
                </div>

            </div>

        )
    }
}

export default withRouter(OwnerProfileWrapper);