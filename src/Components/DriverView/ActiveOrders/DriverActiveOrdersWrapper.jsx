import React, { Component } from 'react';
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
                <h1 style = {{textAlign: 'center'}}>Driver Active Orders</h1>
           
                <DriverActiveOrderCard />
            </div>
        )
    }
}

export default DriverActiveOrderWrapper;