import React, { Component } from 'react';
import { Card } from 'antd';
import '../../Styling/Dashboard.css';

class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail'
        }
    }

    render() {
        return (
            <div className="dasboard-content-wrapper">
                <Card title="Featured Dishes" >
                    <p
                        style={{
                            fontSize: 14,
                            color: 'rgba(0, 0, 0, 0.85)',
                            marginBottom: 16,
                            fontWeight: 500,
                        }}
                    > </p>
                </Card>
            </div>
        )
    }
}

export default DashboardContent;