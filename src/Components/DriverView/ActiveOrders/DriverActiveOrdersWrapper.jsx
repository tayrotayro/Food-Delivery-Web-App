import React, { Component } from 'react';
import { Badge } from 'antd';
import DriverActiveOrderCard from './DriverActiveOrderCard';

class DriverActiveOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Active Orders <Badge style={{ backgroundColor: '#237804' }} count={"3"} /></h1>
                <DriverActiveOrderCard />
            </div>
        )
    }
}

export default DriverActiveOrderWrapper;