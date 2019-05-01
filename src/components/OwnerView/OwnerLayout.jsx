import React, { Component } from 'react';
import { message, Row, Col } from 'antd';
import OwnerTabBar from './OwnerTabBar';
import { Redirect } from 'react-router-dom';
import './OwnerLayout.css';
import OwnerHome from './Home/OwnerHomeWrapper';
import MenuWrapper from './Menu/MenuWrapper'
import ActiveOrders from './ActiveOrders/OwnerActiveOrderWrapper';
import PastOrders from './PastOrders/OwnerPastOrderWrapper';
import OwnerProfile from "./Profile/OwnerProfileWrapper";
import AppFooter from '../AppFooter';
import OwnerProfileCreateRestaurant from './Profile/OwnerProfileCreateRestaurant';
import "../OwnerView/Profile/style.css";

class OwnerLayout extends Component {
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
            <div className="owner-layout-wrapper">
                <div className="owner-status-bar">Restaurant Owner Mode</div>
                <Row className="user-content-responsive-wrapper">
                    <Col xs={0} sm={0} md={0} lg={1} xl={2}></Col>
                    <Col xs={24} sm={24} md={24} lg={22} xl={20}>
                        <div className="owner-content">
                            {
                                this.props.history.location.pathname === '/owner-home'
                                &&
                                <OwnerHome />
                            }
                            {

                                this.props.history.location.pathname === '/owner-menu'
                                &&
                                <MenuWrapper />

                            }
                            {
                                this.props.history.location.pathname === '/owner-active'
                                &&
                                <ActiveOrders />
                            }
                            {
                                this.props.history.location.pathname === '/owner-past'
                                &&
                                <PastOrders />
                            }
                            {
                                this.props.history.location.pathname === '/owner-profile'
                                &&
                                <OwnerProfile />
                            }
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={1} xl={2}></Col>
                </Row>
                {/* {
                    this.props.history.location.pathname === '/owner-create-restaurant'
                    &&
                    <OwnerProfileCreateRestaurant />
                }
                {
                    this.props.history.location.pathname === '/owner-create-menu-item'
                    &&
                    <OwnerProfileCreateRestaurant />
                } */}
                <AppFooter />
                <OwnerTabBar />
            </div>
        )
    }
}

export default OwnerLayout;