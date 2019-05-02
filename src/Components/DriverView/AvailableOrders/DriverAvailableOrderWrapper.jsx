import React, { Component } from 'react';
import { Row, Col, Badge } from 'antd';
import AvailableOrderCard from './AvailableOrderCard';
import Axios from 'axios';

class DriverAvailableOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:5000/api/driver/available-orders`)
        .then(response => {
            this.setState({
                orders: response.data.data
            })
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }


    // fetchAvailableOrders = () => {
    //     Axios.get(`http://localhost:5000/api/driver/available-orders`)
    //         .then(response => {
    //             this.setState({
    //                 orders: response.data.data
    //             })
    //             console.log(response);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }


    render() {
        return (
            <div>
                <h1>Available Orders <Badge style={{ backgroundColor: '#237804' }} count={"20"} /></h1>
                <Row gutter={{ xs: 0, sm: 0, md: 32, lg: 32, xl: 32 }}>
                    {
                        /* this.state.orders*/[1].map(order => {
                            return (
                                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={order._id}>
                                    <AvailableOrderCard order={this.state.orders} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default DriverAvailableOrderWrapper;