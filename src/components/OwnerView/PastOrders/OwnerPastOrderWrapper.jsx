import React, { Component } from 'react';
import {Card} from 'antd';
import PastOrderCard from '../../UserView/Orders/OrderCards/PastOrderCard';

class OwnerPastOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Card title = "Past Orders">
                <PastOrderCard />
            </Card>
        )
    }
}

export default OwnerPastOrderWrapper;