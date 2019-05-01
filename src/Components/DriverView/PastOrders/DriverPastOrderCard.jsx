import React, { Component } from 'react';
import { Button, Collapse, Card, Row } from 'antd';

const content = 'this is where all your order information goes.';
const Price = '$$';
const Status = 'Available for Pickup'


class DriverPastOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {

    return (

      <Card size ='small' title = 'Payton Karno' >
      
    <Collapse >
      <Collapse.Panel header = 'Order Info'>
        <div style={{direction: 'flex', flexDirection: 'row'}}>
        <h3>Contents:</h3><p>{content}</p>
        </div>

        <h3>Status: </h3><p>{Status}</p>
      
         <h3>Price: </h3><p>{Price}</p>
      </Collapse.Panel>
    </Collapse>
    
    </Card>  

        
    )
  }
}

export default DriverPastOrderCard;