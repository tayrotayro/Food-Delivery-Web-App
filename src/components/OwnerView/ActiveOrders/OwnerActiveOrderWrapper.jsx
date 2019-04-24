import React, { Component } from 'react';
import { Card } from 'antd';
import OwnerRestaurantMenuDropdown from '../Menu/OwnerRestaurantMenuDropdown';
import OwnerActiveOrderCard from '../../OwnerView/ActiveOrders/OwnerActiveOrderCard';

class OwnerActiveOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Card title = "Active Orders">
                <div style = {{padding: '15px', textAlign: 'center'}}>
                <OwnerRestaurantMenuDropdown/>
                </div>
                
                <OwnerActiveOrderCard />
            </Card>
            
        )
    }
}

export default OwnerActiveOrderWrapper;