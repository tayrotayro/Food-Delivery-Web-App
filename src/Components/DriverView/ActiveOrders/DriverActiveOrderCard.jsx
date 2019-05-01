import React, { Component } from 'react';
import { Button, Collapse, Card, Row } from 'antd';
import { Icon } from 'antd-mobile';
import './style.css';

const buttonStyle = {
  size: "small",
  flexDirection: 'row',
  AlignItems: 'right',

}

const content = 'this is where all your order information goes.';
const Price = '$$';
const Status = 'Active'


class DriverActiveOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {

    return (
      <Card>
        <Card size='small' style={{ margin: "20px" }} title='Payton Karno' extra={<Button style={buttonStyle} type='primary'>Delivered</Button>}>

          <div className="content" style={{ display: 'flex', flexDirection: 'row' }}>
            <h3>Contents:</h3><p>{content}</p>

            <h3>Status: </h3><p>{Status}</p>

            <h3>Price: </h3><p>{Price}</p>
          </div>
        </Card>
      </Card>

    )
  }
}

export default DriverActiveOrderCard;