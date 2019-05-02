import React, { Component } from 'react';
import { message, Row, Col } from 'antd';
import DriverTabBar from './DriverTabBar';
import DriverHome from '../DriverView/AvailableOrders/DriverAvailableOrderWrapper';
import DriverActive from './ActiveOrders/DriverActiveOrdersWrapper';
import DriverPast from './PastOrders/DriverPastOrdersWrapper';
import DriverProfile from './Profile/DriverProfileWrapper';
import './DriverLayout.css';
import AppFooter from '../AppFooter';
import { Redirect } from "react-router-dom";

class DriverLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (!localStorage.getItem('loggedInUserId')) {
            message.error('You have to sign in first to access this page.', 5);
            return <Redirect to="/authentication" />
        }

        return (
            <div className="driver-layout-wrapper">
                <div className="driver-status-bar">Driver Mode</div>
                <Row className="user-content-responsive-wrapper">
                    <Col xs={0} sm={0} md={0} lg={1} xl={2}></Col>
                    <Col xs={24} sm={24} md={24} lg={22} xl={20}>
                        <div className="owner-content">
                            {
                                this.props.history.location.pathname === '/driver-home'
                                &&
                                <DriverHome />
                            }
                            {
                                this.props.history.location.pathname === '/driver-active'
                                &&
                                <DriverActive />
                            }
                            {
                                this.props.history.location.pathname === '/driver-past'
                                &&
                                <DriverPast />
                            }
                            {
                                this.props.history.location.pathname === '/driver-profile'
                                &&
                                <DriverProfile />
                            }
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={1} xl={2}></Col>
                </Row>
                <AppFooter />
                <DriverTabBar />
            </div>
        )
    }
}

export default DriverLayout;