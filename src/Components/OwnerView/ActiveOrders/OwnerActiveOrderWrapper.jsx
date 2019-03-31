import React, { Component } from 'react';
import OrderCard from '../../Restaurants/OrderCard';
import { Card } from 'antd';

class OwnerActiveOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Card title="Active Orders">
            <p
              style={{
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.85)',
                marginBottom: 16,
                fontWeight: 500,
              }}
            >

            </p>
             <OrderCard/>
             <OrderCard/>
         </Card>
        
        )
    }
}

export default OwnerActiveOrderWrapper;