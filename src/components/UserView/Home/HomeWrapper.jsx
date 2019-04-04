import React, { Component } from 'react';
import { Card, Row, Col, Spin } from 'antd';
import '../../../style/Dashboard.css';
import RestaurantCard from './RestaurantCard';

const { Meta } = Card;

const gridStyle = {
    width: '25%',
    textAlign: 'center',
}

class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1000)
    }

    render() {
        if (this.state.loading) {
            return <div className="spinner-wrapper">
                <Spin size="large" />
            </div>
        }

        return (
            <div className="dasboard-content-wrapper">
                <Card title="Featured Restaurants" >
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <div className="content-cards">
                            {/* <Row gutter={10}>
                                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 7, offset: 1 }}>
                                    <RestaurantCard />
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
                            </Row> */}
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default DashboardContent;