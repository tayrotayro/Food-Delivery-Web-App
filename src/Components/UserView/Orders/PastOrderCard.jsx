import React, { Component } from 'react';
import { Card, Tag, Collapse, Divider, Avatar, Row, Col } from 'antd';
import moment from 'moment';
import OrderItemList from '../../SharedComponents/OrderItemList/OrderItemList';
import './PastOrderCard.css';

const Panel = Collapse.Panel;

class PastOrderCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Card
                className="user-active-order-card"
                title={moment().format('dddd, MMMM DD')}
                extra={<Tag color="green">COMPLETED</Tag>}
            >
                <Collapse bordered={false}>
                    <Panel className="user-active-order-card-panel" header="Order Summary" key="1">
                        <Row>
                            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                <h3>Order #</h3>
                                <h2>68F8C9</h2>
                            </Col>
                            <Col xs={24} sm={0} md={0} lg={0} xl={0}>
                                <Divider className="dense" />
                            </Col>
                            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                <h3>Total</h3>
                                <h2>$24.68</h2>
                            </Col>
                            <Col xs={24} sm={0} md={0} lg={0} xl={0}>
                                <Divider className="dense" />
                            </Col>
                            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                <h3>Tips - <a>add</a></h3>
                                <h2>$0.00</h2>
                            </Col>
                        </Row>
                        <Divider className="dense" />
                        <Row>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                <h3>Delivery by <a>Delaney</a></h3>
                                <Avatar size={64} icon="user" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/16265793_235972110189167_3250242832004968832_n.jpg?_nc_cat=110&_nc_oc=AQmhTY5MYJEkxn7QyL-C5g-BltAzpCBppqIK-TgzaLJhRD6NN5sY8K33yuTlSjdZsgc&_nc_ht=scontent-atl3-1.xx&oh=c2df6aa2d44608b94658fd9fd2e444b4&oe=5D39CC4A" />
                            </Col>
                            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                                <Divider className="dense-2" />
                            </Col>
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
                    <Panel className="user-active-order-card-panel" header="Order Details" key="2">
                        <OrderItemList isEditable={false} />
                    </Panel>
                </Collapse>
            </Card>
        )
    }
}

export default PastOrderCard;