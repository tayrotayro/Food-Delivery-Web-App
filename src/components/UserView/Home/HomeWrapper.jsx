import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../../style/Dashboard.css';
import Spinner from '../../Spinner';
import UserHomeRestaurantCard from './UserHomeRestaurantCard';
import RestaurantList from '../../UserView/Home/RestaurantList';
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
        axios.get('http://localhost:5000/api/restaurant')
            .then(response => {
                console.log(response);
                this.setState({
                    restaurants: response.data.data,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ loading: false })
    //     }, 1000)
    // }

    render() {
        if (this.state.loading) {
            return <Spinner />
        }
    
        return (
            <div className="dasboard-content-wrapper">
                <h1>Popular</h1>
                <Row gutter={{ xs: 0, sm: 16, md: 32, lg: 32, xl: 32 }}>
                    {
                        [1, 2, 3].map(number => {
                            return (
                                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                    <UserHomeRestaurantCard />
                                </Col>
                            )
                        })
                    }
                </Row>
                <h1>Open Now</h1>
                {/* <Card title="Featured Restaurants" >
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <div className="content-cards">
                            <Row gutter={10}>
                                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 7, offset: 1 }}>
                                    <FeaturedRestaurantCard />
                                </Col>
                                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 7, offset: 1 }}>
                                    <Card title="Card title" bordered={false}>
                                        Card content
                                </Card>
                                </Col>
                                <Col xs={{ span: 0, offset: 1 }} lg={{ span: 7, offset: 1 }}>
                                    <Card title="Card title" bordered={false}>
                                        Card content
                                </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Card>
                <Card title="Restaurants">
                    <RestaurantList />
                </Card> */}
            </div>
        )
    }
}

export default DashboardContent;