import React, { Component } from 'react';
import { Divider, Card, Menu, Dropdown, Icon } from 'antd';
import axios from 'axios';
import "./style.css";

class OwnerHomeWrapper extends Component {
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


    //use card to render info


    render() {
        const { Meta } = Card;
        const menu = (
            <Menu style={{width: 200, textAlign: "center"}}>
                <h3>Restaurant Info</h3>
                {/* <h3>Addresss:</h3> <h5>{this.state.restaurants.phone}</h5> */}
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );


        return (
            <div className="owner-home">
                <h1>Owner Home</h1>
                <Divider >My Restaurants</Divider>
                {
                    this.state.restaurants.map(restaurant => {
                        return (
                            <div className="restaurant-cards">
                                <Card
                                    hoverable
                                    style={{ width: 240, textAlign: "center" }}
                                    cover={<img alt="example" src={restaurant.pictureURL} />}
                                >
                                    <Divider />
                                    <Meta
                                        title={restaurant.name}
                                        description={restaurant.description}
                                    />
                                    <div className="dropdown" >
                                        <Dropdown overlay={menu} trigger={['click']}>
                                            <a className="ant-dropdown-link" href="#">
                                               More Info <Icon type="down" />
                                            </a>
                                        </Dropdown>
                                    </div>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default OwnerHomeWrapper;