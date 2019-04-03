import React, { Component } from 'react';
import DriverTabBar from './DriverTabBar';
import DriverHome from './Home/DriverHomeWrapper';
import DriverActive from './ActiveOrders/DriverActiveOrdersWrapper';
import DriverPast from './PastOrders/DriverPastOrdersWrapper';
import DriverProfile from './Profile/DriverProfileWrapper';
import './DriverLayout.css';

class DriverLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="driver-layout-wrapper">
                <div className="driver-status-bar">
                    <h4>Driver Mode</h4>
                </div>
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
                <DriverTabBar />
            </div>
        )
    }
}

export default DriverLayout;