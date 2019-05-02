import React, { Component } from 'react';
import { Row, Col, Badge } from 'antd';
import AvailableOrderCard from './AvailableOrderCard';

class DriverAvailableOrderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Available Orders <Badge style={{ backgroundColor: '#237804' }} count={"20"} /></h1>
                <Row gutter={{ xs: 0, sm: 0, md: 32, lg: 32, xl: 32 }}>
                    {
                        [1, 2, 3].map(order => {
                            return (
                                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={order._id}>
                                    <AvailableOrderCard />
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