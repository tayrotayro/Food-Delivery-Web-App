import React, { Component } from 'react';
import { Badge } from 'antd'
import ActiveOrderCard from './ActiveOrderCard';

class OrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Active Orders <Badge style={{ backgroundColor: '#2f54eb' }} count={"1 order"} /></h1>
                <ActiveOrderCard />
                <h1>Order History <Badge style={{ backgroundColor: '#2f54eb' }} count={"8 orders"} /></h1>
            </div>
        )
    }
}

export default OrderWrapper;
