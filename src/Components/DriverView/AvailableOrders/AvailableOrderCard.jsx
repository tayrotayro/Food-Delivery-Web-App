import React, { Component } from 'react';
import { Card, Button, Divider } from 'antd';
import './AvailableOrderCard.css';

class AvailableOrderCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Card
                className="available-order-card"
                title="Customer Name"
                extra={<Button type="primary">Select Order</Button>}
            >
                <h3>Deliver From</h3>
                <div>Restaurant name</div>
                <div>Restaurant address</div>
                <Divider />
                <h3>Deliver To</h3>
                <div>Taylor Rotolo</div>
                <div>1000 Jackson Ave West</div>
                <div>Apt. 123</div>
                <div>Oxford, MS 38655</div>
                <Divider />
                <h3 style={{ display: 'inline-block' }}>Total:&nbsp;&nbsp;</h3>
                <h2 style={{ display: 'inline-block' }}>$18.32</h2>
            </Card>
        )
    }
}

export default AvailableOrderCard;