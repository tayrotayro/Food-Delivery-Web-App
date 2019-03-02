import React, { Component } from 'react';
import { Card, Row, Col, Input } from 'antd';
import '../../style/Dashboard.css';

const { Meta } = Card;

class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail'
        }
    }

    render() {
        return (
            <div className="dasboard-content-wrapper">
                <Card title="Featured Restaurants" >
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <div className="content-cards">
                            <Row gutter={10}>
                                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 7, offset: 1 }}>
                                    <Card title="Card title" bordered={false} >
                                        Card content
                                </Card>
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
            </div>
        )
    }
}

export default DashboardContent;