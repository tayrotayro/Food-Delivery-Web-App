import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../../style/Dashboard.css';
import Spinner from '../../Spinner';
import UserHomeRestaurantCard from './UserHomeRestaurantCard';
import RestaurantPage from './RestaurantPage/RestaurantPage';
import axios from 'axios';

class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            loading: true,
            restaurants: [],
            openRestaurantPage: false,
            selectedRestaurant: null,
            selectedRestaurantMenuItems: []
        }
    }

    componentDidMount() {
        this.fetchRestaurants();
    }

    fetchRestaurants = () => {
        axios.get('http://localhost:5000/api/restaurant')
            .then(response => {
                this.setState({
                    restaurants: response.data.data,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    openRestaurantPage = (restaurant) => {
        axios.get(`http://localhost:5000/api/menu-item/${restaurant.menuId}`)
            .then(response => {
                this.setState({
                    openRestaurantPage: true,
                    selectedRestaurant: restaurant,
                    selectedRestaurantMenuItems: response.data.data.items
                })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    render() {
        if (this.state.loading) {
            return <Spinner />
        }

        return (
            <div className="dasboard-content-wrapper">
                <h1>All Restaurants</h1>
                <Row gutter={{ xs: 0, sm: 16, md: 32, lg: 32, xl: 32 }}>
                    {
                        this.state.restaurants.map(restaurant => {
                            return (
                                <Col xs={24} sm={12} md={8} lg={8} xl={8} key={restaurant._id}>
                                    <UserHomeRestaurantCard
                                        restaurant={restaurant}
                                        refetch={this.fetchRestaurants}
                                        onClick={() => this.openRestaurantPage(restaurant)}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
                {/* <h1>Open Now</h1> */}
                <RestaurantPage
                    isOpen={this.state.openRestaurantPage}
                    restaurant={this.state.selectedRestaurant}
                    menuItems={this.state.selectedRestaurantMenuItems}
                    onClose={() => this.setState({ openRestaurantPage: false, selectedRestaurant: null })}
                />
            </div>
        )
    }
}

export default DashboardContent;