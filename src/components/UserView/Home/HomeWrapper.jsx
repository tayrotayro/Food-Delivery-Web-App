import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../../style/Dashboard.css';
import Spinner from '../../Spinner';
import UserHomeRestaurantCard from './UserHomeRestaurantCard';
import axios from 'axios';

class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            loading: true,
            restaurants: []
        }
    }

    componentDidMount() {
        this.fetchRestaurants();
    }

    fetchRestaurants = () => {
        axios.get('http://localhost:5000/api/restaurant')
            .then(response => {
                console.log(response.data.data);
                this.setState({
                    restaurants: response.data.data,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        if (this.state.loading) {
            return <Spinner />
        }

        console.log(this.state.restaurants);

        return (
            <div className="dasboard-content-wrapper">
                <h1>Popular</h1>
                <Row gutter={{ xs: 0, sm: 16, md: 32, lg: 32, xl: 32 }}>
                    {
                        this.state.restaurants.map(restaurant => {
                            return (
                                <Col xs={24} sm={12} md={8} lg={8} xl={8} key={restaurant._id}>
                                    <UserHomeRestaurantCard restaurant={restaurant} refetch={this.fetchRestaurants} />
                                </Col>
                            )
                        })
                    }
                </Row>
                {/* <h1>Open Now</h1> */}
            </div>
        )
    }
}

export default DashboardContent;