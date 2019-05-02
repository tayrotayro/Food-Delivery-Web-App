import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button, Row, Col, Icon } from 'antd';
import axios from 'axios';
import OwnerHomeRestaurantCard from './OwnerHomeRestaurantCard';
import AddRestaurantDrawer from './Drawers/AddRestaurantDrawer';
import "./style.css";

class OwnerHomeWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            openAddRestaurantDrawer: false
        }
    }

    componentDidMount() {
        const baseUserId = localStorage.getItem('loggedInUserId');

        axios.get(`http://localhost:5000/api/restaurant/${baseUserId}`)
            .then(response => {
                console.log(response.data.data);
                this.setState({
                    restaurants: response.data.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        // if (!this.state.restaurants || this.state.restaurants.length === 0) {
        //     return (
        //         <div className="empty-owner-restaurant-list">
        //             <img src={require('../../../images/empty-state-1.png')} />
        //             <h3>You have no restaurant in Delivrd system</h3>
        //             <Button type="primary" size="large" onClick={() => this.setState({ openAddRestaurantDrawer: true })}>Register a new restaurant</Button>
        //             <AddRestaurantDrawer isOpen={this.state.openAddRestaurantDrawer} onClose={() => this.setState({ openAddRestaurantDrawer: false })} />
        //         </div>
        //     )
        // }

        return (
            <div className="owner-home">
                <div className="headings-with-actions">
                    <h1>My Restaurants</h1>
                    <a>
                        <Icon type="plus-circle" style={{ fontSize: '26px' }}
                            onClick={() => this.setState({ openAddRestaurantDrawer: true })} />
                    </a>
                </div>
                <Row gutter={{ xs: 0, sm: 0, md: 32, lg: 32, xl: 32 }}>
                    {
                        this.state.restaurants.map(restaurant => {
                            return (
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} key={restaurant._id}>
                                    <OwnerHomeRestaurantCard restaurant={restaurant} />
                                </Col>
                            )
                        })
                    }
                </Row>
                <AddRestaurantDrawer isOpen={this.state.openAddRestaurantDrawer} onClose={() => this.setState({ openAddRestaurantDrawer: false })} />
            </div>
        )
    }
}

export default withRouter(OwnerHomeWrapper);