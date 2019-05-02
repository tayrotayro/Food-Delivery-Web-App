import React, { Component } from 'react';
import { Card, Tag, Collapse, Divider, Avatar, Row, Col } from 'antd';
import moment from 'moment';
import OrderItemList from '../../SharedComponents/OrderItemList/OrderItemList';
import './DriverPastOrderCard.css';

const Panel = Collapse.Panel;

class DriverPastOrderCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Card
                className="driver-active-order-card"
                title="Taylor Rotolo"
                extra={<Tag color="green">DELIVERED</Tag>}
            >
                <Collapse bordered={false}>
                    <Panel className="driver-active-order-card-panel" header="Order Summary" key="1">
                        <Row>
                            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                <h3>Order #</h3>
                                <h2>68F8C9</h2>
                            </Col>
                            <Col xs={24} sm={0} md={0} lg={0} xl={0}>
                                <Divider className="dense" />
                            </Col>
                            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                <h3>Tips</h3>
                                <h2>$0.00</h2>
                            </Col>
                        </Row>
                        <Divider className="dense" />
                        <Row>
                            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                <h3>To <a>Taylor Rotolo</a></h3>
                                <div className="order-card-address">Jackson Avenue West<br />Oxford, MS<br />38655</div>
                            </Col>
                            <Col xs={24} sm={0} md={0} lg={0} xl={0}>
                                <Divider className="dense-2" />
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                <h3>From <a>Southern Coop</a></h3>
                                <div className="order-card-address">South Lamar Blvd<br />Oxford, MS<br />38655</div>
                            </Col>
                        </Row>
                    </Panel>
                    {/* <Divider /> */}
                    {/* <Panel className="driver-active-order-card-panel" header="Order Details" key="2">
                        <OrderItemList isEditable={false} />
                    </Panel> */}
                </Collapse>
            </Card>
        )
    }
}

export default DriverPastOrderCard;