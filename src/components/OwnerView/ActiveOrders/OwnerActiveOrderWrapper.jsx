import React, { Component } from 'react';
import { Card, Badge } from 'antd';
import OwnerActiveOrderCard from './OwnerActiveOrderCard';
// import OwnerRestaurantMenuDropdown from '../Menu/OwnerRestaurantMenuDropdown';

class OwnerActiveOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Active Orders <Badge style={{ backgroundColor: '#003a8c' }} count={"1 order"} /></h1>
                {/* <div style={{ padding: '15px', textAlign: 'center' }}>
                    <OwnerRestaurantMenuDropdown />
                </div> */}
                <OwnerActiveOrderCard />
            </div>
        )
    }
}

export default OwnerActiveOrderWrapper;