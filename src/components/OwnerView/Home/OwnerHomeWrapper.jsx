import React, { Component } from 'react';
import { Divider, Card, Collapse } from 'antd';
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
        const Panel = Collapse.Panel;

        if (!this.state.restaurants || this.state.restaurants.length === 0) {
            return (
                <div className="empty-owner-restaurant-list">

                </div>
            )
        }

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
                                        {/* <Dropdown overlay={menu} trigger={['click']}>
                                            <a className="ant-dropdown-link" href="#">
                                               More Info <Icon type="down" />
                                            </a>
                                        </Dropdown> */}

                                        <Collapse defaultActiveKey={['0']} style={{ width: "190px", paddingLeft: "10px", textAlign: "left" }} >
                                            <Panel header="More Info" key="1" style={{ flexDirection: "column" }}>
                                                <div className="rest-info">
                                                    <p><strong>Phone:</strong> {restaurant.phone}</p>
                                                    <p><strong>Address:</strong> {restaurant.address}</p>
                                                </div>
                                            </Panel>
                                        </Collapse>
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