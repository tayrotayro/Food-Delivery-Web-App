import React, { Component } from 'react';
import DashboardNavBar from './DashboardNavBar';
import DashboardContent from './DashboardContent';
import '../../Styling/Dashboard.css';


class DashboardWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail'
        }
    }

    render() {
        return (
            <div className="dashboard-wrapper">
            <DashboardNavBar />
            <DashboardContent />
            </div>
        )
    }
}

export default DashboardWrapper;