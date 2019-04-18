import React, { Component } from 'react';
import { Card, Button } from 'antd';
import CardInfo from './CardInfo'
import ProgressBar from './ProgressBar';

const gridStyle = {
  width: '33%',
  textAlign: 'center'
}

const buttonStyle = {
  flexDirection: 'row',
  AlignItems: 'end',
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
        extra={<Button type="primary">Ready for pickup</Button>}
      >

        <Card.Grid style={{ gridStyle }}><CardInfo /></Card.Grid>
        <Card.Grid title="Status" style={{ gridStyle }}><ProgressBar /></Card.Grid>
        <Card.Grid style={{ gridStyle }} >total: $25.00<Button size={"small"}>Ready for Pickup</Button></Card.Grid>

      </Card>


    )
  }
}

export default ActiveOrderCard;