import React, { Component } from 'react';
import DriverPastOrderCard from './DriverPastOrderCard';

class DriverPastOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
            <h1>Driver Past Orders</h1>

            <DriverPastOrderCard/>
        </div>
        )
    }
}

export default DriverPastOrderWrapper;