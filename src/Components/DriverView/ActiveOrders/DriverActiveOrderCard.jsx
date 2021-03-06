import React, { Component } from 'react';
import { Card, Tag, Steps, Icon, Collapse, Divider, Avatar, Row, Col, Button } from 'antd';
import moment from 'moment';
import OrderItemList from '../../SharedComponents/OrderItemList/OrderItemList';
import './DriverActiveOrderCard.css';
import Axios from 'axios';

const Step = Steps.Step;
const Panel = Collapse.Panel;
const smallBreakPoint = 576;

class DriverActiveOrderCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verticalSteps: window.innerWidth < smallBreakPoint
        }
    }

    componentDidMount() {
        {window.addEventListener('resize', () => this.setState({ verticalSteps: window.innerWidth < smallBreakPoint }))}
        this.fetchAvailableOrders()
    }

    fetchAvailableOrders = () => {
        Axios.get(`http://localhost:5000/api/driver/available-orders`)
            .then(response => {
                console.log(response);
            })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.setState({ verticalSteps: window.innerWidth < smallBreakPoint }));
    }

    render() {
        return (
            <Card
                className="driver-active-order-card"
                title="Taylor Rotolo"
                // extra={<Button type="primary" size="large">Pick Up</Button>}
                extra={<div>
                    <Button type="primary" size="large">Deliver</Button>
                </div>}
            >
                <Steps
                    className="order-step"
                    direction={this.state.verticalSteps ? "vertical" : "horizontal"}
                >
                    <Step
                        title="Placed"
                        icon={<Icon type="shopping-cart" />}
                        status="finish"
                        description={moment().format('hh:mm A')} />
                    <Step
                        title="Accepted"
                        icon={<Icon type="check-circle" />}
                        status="finish"
                        description={moment().add(3, 'm').format('hh:mm A')} />
                    <Step
                        title="Ready for Pickup"
                        icon={<Icon type="gift" />}
                        status="finish"
                        description={moment().add(10, 'm').format('hh:mm A')} />
                    <Step
                        title={<div><Icon type="loading" /> Enroute</div>}
                        icon={<Icon type="car" />}
                        status="process"
                        description={moment().add(15, 'm').format('hh:mm A')} />
                    <Step
                        title="Delivered"
                        icon={<Icon type="home" />}
                        status="wait"
                        description={moment().add(35, 'm').format('hh:mm A')} />
                </Steps>
                <Divider />
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
                                <h3>Total</h3>
                                <h2>$24.68</h2>
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
                                {/* <div className="order-card-phone"><Icon type="phone" />: (662) 371 - 5507</div> */}
                            </Col>
                            <Col xs={24} sm={0} md={0} lg={0} xl={0}>
                                <Divider className="dense-2" />
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                <h3>From <a>Southern Coop</a></h3>
                                <div className="order-card-address">South Lamar Blvd<br />Oxford, MS<br />38655</div>
                                {/* <div className="order-card-phone"><Icon type="phone" />: (662) 123 - 4567</div> */}
                            </Col>
                        </Row>
                    </Panel>
                    {/* <Divider /> */}
                    <Panel className="driver-active-order-card-panel" header="Order Details" key="2">
                        <OrderItemList isEditable={false} />
                    </Panel>
                </Collapse>
            </Card>
        )
    }
}

export default DriverActiveOrderCard;