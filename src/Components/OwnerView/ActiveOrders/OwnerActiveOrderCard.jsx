import React, { Component } from 'react';
import { Button, Collapse, Card, Row } from 'antd';
import { Icon } from 'antd-mobile';


const buttonStyle={
size:"small",
flexDirection: 'row',
AlignItems: 'right',

}

const content = 'this is where all your order information goes.';
const Price = '$$';
const Status = 'Active'


class OwnerActiveOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {

    return (

      <Card size ='small' title = 'Payton Karno' extra ={<Button style={buttonStyle} type = 'primary'>Ready for pickup</Button>}>
      
      <div style={{direction: 'flex', flexDirection: 'row'}}>
      <h3>Contents:</h3><p>{content}</p>
      </div>

      <h3>Status: </h3><p>{Status}</p>
      
      <h3>Price: </h3><p>{Price}</p>
    </Card>  

        
    )
  }
}

export default OwnerActiveOrderCard;