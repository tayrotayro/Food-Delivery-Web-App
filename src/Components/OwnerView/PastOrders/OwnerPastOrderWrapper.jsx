import React, { Component } from 'react';
import {Card} from 'antd';
import PastOrderCard from '../../OrderCards.jsx/PastOrderCard';

class OwnerPastOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
                <Card title="Past Orders">
                <p
                  style={{
                    fontSize: 14,
                    color: 'rgba(0, 0, 0, 0.85)',
                    marginBottom: 16,
                    fontWeight: 500,
                  }}
                >
    
                </p>
                 <PastOrderCard/>
             </Card>
        )
    }
}

export default OwnerPastOrderWrapper;