import React, { Component } from 'react';
import { Card } from 'antd';
import CardInfo from './CardInfo'
import ProgressBar from './ProgressBar';

const gridStyle={
  width: '25%',
  textAlign: 'center',
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
        >

         <Card.Grid style={{gridStyle}}><CardInfo/></Card.Grid>
          <Card.Grid title = "Status" style={{gridStyle}}><ProgressBar/></Card.Grid>
          <Card.Grid style={{gridStyle}}>total: $25.00</Card.Grid>

        </Card>

        
    )
  }
}

export default ActiveOrderCard;