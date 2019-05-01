import React, { Component } from 'react';
import {Card} from 'antd';
import OwnerPastOrderCard from '../PastOrders/OwnerPastOrderCard';

class OwnerPastOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Card title = "Past Orders">
                <OwnerPastOrderCard/>
            </Card>
        )
    }
}

export default OwnerPastOrderWrapper;