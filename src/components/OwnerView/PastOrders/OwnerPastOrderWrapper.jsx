import React, { Component } from 'react';
import { Card, Badge } from 'antd';
import OwnerPastOrderCard from './OwnerPastOrderCard';

class OwnerPastOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Order History <Badge style={{ backgroundColor: '#003a8c' }} count={"19 orders"} /></h1>
                <OwnerPastOrderCard />
            </div>
        )
    }
}

export default OwnerPastOrderWrapper;