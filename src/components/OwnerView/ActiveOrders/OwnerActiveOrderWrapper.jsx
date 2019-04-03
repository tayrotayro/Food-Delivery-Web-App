import React, { Component } from 'react';
import { Card } from 'antd';
import ActiveOrderCard from '../../UserView/Orders/OrderCards/ActiveOrderCard';

class OwnerActiveOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Card title = "Active Orders">
                <ActiveOrderCard />
            </Card>
            
        )
    }
}

export default OwnerActiveOrderWrapper;