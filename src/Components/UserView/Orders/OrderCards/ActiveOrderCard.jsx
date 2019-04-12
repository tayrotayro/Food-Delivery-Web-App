import React, { Component } from 'react';
import { Card, Button } from 'antd';
import CardInfo from './CardInfo'
import ProgressBar from './ProgressBar';

const gridStyle={
  width: '25%',
  textAlign: 'center',
  
  
}

const buttonStyle={
size:"small",
flexDirection: 'row',
AlignItems: 'right',
padding: "15px",

}

class ActiveOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      
        <Card
          type="inner"
          title="Payton-Karno"
          extra = {<Button style={{buttonStyle}} type ="primary">Ready for Pickup</Button>}
        >

          <Card.Grid style={{gridStyle}}><CardInfo/></Card.Grid>
          <Card.Grid title = "Status" style={{gridStyle}}></Card.Grid>
          <Card.Grid style={{gridStyle}} >total: $25.00</Card.Grid>
          <ProgressBar />

        </Card>

        
    )
  }
}

export default ActiveOrderCard;