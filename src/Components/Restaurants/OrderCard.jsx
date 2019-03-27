import React,{Component} from 'react';
import {mountNode} from 'react-dom';
import {Card} from 'antd';

//const {Meta} = Card;

class OrderCard extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }


render(){


  return(
  <Card title="Orders">
      <p
      style={{
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.85)',
        marginBottom: 16,
        fontWeight: 500,
        }}
      >
      Active Orders
        </p>
          <Card
            type="inner"
            title="Order 1"
            extra={<a href="#">Ready for Delivery</a>}
          >
            Order Name=" "
            Contents=" "
            address=" "
            status=" "
            $total=" "

          </Card>
  </Card>,
  mountNode
    );
  }
}

export default OrderCard