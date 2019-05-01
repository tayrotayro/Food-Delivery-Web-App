import React, { Component } from 'react';
import { Card, Button } from 'antd';
import OwnerRestaurantMenuDropdown from './OwnerRestaurantMenuDropdown';
import MenuList from './MenuList';
import CreateMenuItem from "./CreateMenuItem";
import axios from 'axios';

class MenuWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        const baseUserId = localStorage.getItem('loggedInUserId');

        axios.get(`http://localhost:5000/api/restaurant/${baseUserId}`)
            .then(response => {
                console.log(response);
                this.setState({
                    restaurants: response.data.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    

    render() {

        const ButtonGroup = Button.Group;
        return (
            <div>
                {
                    this.state.restaurants === null
                    &&
                    <div>
                        <h1>You have NO Menu Items!</h1>
                    </div>
                }
                {
                    this.state.restaurants != null
                    &&
                    this.state.restaurants.map(restaurant => {
                        return (
                            <div>
                                <h1 style={{ textAlign: 'center' }}>{restaurant.name} Menu</h1>
                                <div style={{ padding: '30px', textAlign: 'center' }}>
                            
                                </div>
                                <Card title="Restaurant Menu"
                                    extra={<ButtonGroup>
                                        <CreateMenuItem />
                                    </ButtonGroup>}
                                >
                                    <MenuList restaurant={this.state.restaurants} />
                                </Card>
                            </div>
                        )
                    })

                }
            </div>
        )
    }
}

export default MenuWrapper;