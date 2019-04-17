import React, { Component } from 'react';
import { Button, Collapse, Card, Row } from 'antd';
import { Icon } from 'antd-mobile';


const buttonStyle={
size:"small",
flexDirection: 'row',
AlignItems: 'right',

}

const text = 'this is where all your order information goes.';
const Price = '$$';
const Status = 'Active'

// const genExtra = () => (
//   <Icon
//     type="Ready for Pickup"
//     onClick={(event) => {
//       event.stopPropagation();
//     }}
//   />
// );

const Panel = Collapse.Panel;

class OwnerActiveOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {

    return (

      <Card title = 'Payton Karno' extra ={<Button style={buttonStyle} type = 'primary'>Ready for pickup</Button>}>
      <Collapse defaultActiveKey={['1']} >
    <Panel 
      header="Order Info" 
      key="1" 
      extra = {[<Button>ready for pickup</Button>]}
      > 
        <p>{text}</p>
        
    </Panel>
    </Collapse>
    
    <div style ={{display: 'flex', flexDirection: 'row'}}>
      <p>Status: {Status}</p>
      <p style = {{textAlign: 'right'}}>price: {Price}</p>
    </div>
    </Card>  

        
    )
  }
}

export default OwnerActiveOrderCard;