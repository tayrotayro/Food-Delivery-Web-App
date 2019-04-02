import React, { Component } from 'react';
import { Card } from 'antd';
import ActiveOrderCard from '../../OrderCards.jsx/ActiveOrderCard';

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
             <ActiveOrderCard/>
             <ActiveOrderCard/>
         </Card>
        
        )
    }
}

export default OwnerActiveOrderWrapper;