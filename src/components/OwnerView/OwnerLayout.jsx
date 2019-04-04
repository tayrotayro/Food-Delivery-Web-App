import React, { Component } from 'react';
import OwnerTabBar from './OwnerTabBar';
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
                <div className='owner-tab-bar'>
                    <OwnerTabBar />
                </div>
            </div>
        )
    }
}

export default OwnerLayout;