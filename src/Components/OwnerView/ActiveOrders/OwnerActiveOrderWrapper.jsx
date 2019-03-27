import React, { Component } from 'react';
import OrderCard from '../../Restaurants/OrderCard';

class OwnerActiveOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <list>     
             <OrderCard/>
             <OrderCard/>
          </list>
        
        )
    }
}

export default OwnerActiveOrderWrapper;