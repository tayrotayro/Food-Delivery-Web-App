import React, { Component } from 'react';
import {Card,Button} from 'antd';
import OwnerRestaurantMenuDropdown from './OwnerRestaurantMenuDropdown';
import MenuList from './MenuList';

class MenuWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        
        const ButtonGroup = Button.Group;


        return (
        <div>
            <h1 style = {{textAlign: 'center'}}>Owner Menu</h1>
            <div style = {{padding: '30px', textAlign: 'center'}}>
                <OwnerRestaurantMenuDropdown
                />
            </div>
            <Card title="Restaurant Menu" 
                extra = {<ButtonGroup>
                    <Button type= 'primary'>Add Item</Button>
                </ButtonGroup>}
            >
                <MenuList/>
            </Card>
        </div>
        )
    }
}

export default MenuWrapper;