import React, { Component } from 'react';
import {Dropdown,Icon,Button,Menu,message} from 'antd';

class OwnerRestaurantMenuDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


render(){

    function handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
      }
      
      function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }
      
      const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1"><Icon type="user" />1st Restaurant</Menu.Item>
          <Menu.Item key="2"><Icon type="user" />2nd Restaurant</Menu.Item>
          <Menu.Item key="3"><Icon type="user" />3rd Restaurant</Menu.Item>
        </Menu>
      );

return(
      <div>
    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
      My Restaurants
    </Dropdown.Button>
    

  </div>
)
      }
    }
export default OwnerRestaurantMenuDropdown;