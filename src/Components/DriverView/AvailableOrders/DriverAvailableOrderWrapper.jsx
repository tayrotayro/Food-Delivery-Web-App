import React, { Component } from 'react';
import DriverAvailableOrderCard from '../AvailableOrders/AvailableOrderCard';

class DriverAvailableOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 style ={{textAlign: 'center'}}>Available Orders</h1>
                <DriverAvailableOrderCard />
            </div>
        )
    }
}

export default DriverAvailableOrderWrapper;