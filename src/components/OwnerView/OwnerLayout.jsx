import React, { Component } from 'react';
import { message } from 'antd';
import OwnerTabBar from './OwnerTabBar';
import { Redirect } from 'react-router-dom';
import './OwnerLayout.css';
import OwnerHome from './Home/OwnerHomeWrapper';
import MenuWrapper from './Menu/MenuWrapper'
import ActiveOrders from './ActiveOrders/OwnerActiveOrderWrapper';
import PastOrders from './PastOrders/OwnerPastOrderWrapper';
import OwnerProfile from "./Profile/OwnerProfileWrapper";
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
                <div className="owner-status-bar">
                    <h4>Restaurant Owner Mode</h4>
                </div>
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
                {
                    this.props.history.location.pathname === '/owner-create-restaurant'
                    &&
                    <OwnerProfileCreateRestaurant />
                }
                {
                    this.props.history.location.pathname === '/owner-create-menu-item'
                    &&
                    <OwnerProfileCreateRestaurant />
                }
                <div className='owner-tab-bar'>
                    <OwnerTabBar />
                </div>
            </div>
        )
    }
}

export default OwnerLayout;