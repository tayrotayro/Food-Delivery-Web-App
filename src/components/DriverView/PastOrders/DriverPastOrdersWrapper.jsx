import React, { Component } from 'react';
import { Badge } from 'antd';
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
                <h1>Orders History <Badge style={{ backgroundColor: '#237804' }} count={"20"} /></h1>
                <DriverPastOrderCard />
            </div>
        )
    }
}

export default DriverPastOrderWrapper;