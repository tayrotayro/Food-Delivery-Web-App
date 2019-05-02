import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Steps, Button, Card, Icon, Form, Input, Divider, Row, Col } from 'antd';
import OrderItemList from '../../SharedComponents/OrderItemList/OrderItemList';
import './CartWrapper.css';

const Step = Steps.Step;

class CartWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            disablePlaceOrderButton: false
        }
    }

    next() {
        window.scrollTo(0, 0);
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        window.scrollTo(0, 0);
        const current = this.state.current - 1;
        this.setState({ current });
    }

    clearErrors = () => {

    }

    render() {
        const { current } = this.state;

        return (
            <div className="cart-wrapper">
                <h1>Cart</h1>
                <div>
                    <Steps labelPlacement="vertical" current={current}>
                        <Step title="Cart Review" icon={<Icon type="shopping-cart" />} />
                        <Step title="Checkout" icon={<Icon type="credit-card" />} />
                        <Step
                            className="confirmation-step"
                            title="Confirmation"
                            icon={<Icon type="check-circle" />}
                        />
                    </Steps>
                    <Card
                        className="cart-review-card"
                        title={<div>
                            <small>Your order from</small>
                            <div>Popeyes (2624 West Jackson Avenue)</div>
                        </div>}
                    >
                        {
                            this.state.current === 0
                            &&
                            <OrderItemList isEditable={true} />
                        }
                        {
                            this.state.current === 1
                            &&
                            <Form className="order-checkout-form">
                                <h2>Shipping Address</h2>
                                <Form.Item
                                    label="Full Name"
                                    colon={false}
                                // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                >
                                    <Input
                                        autoFocus size="large"
                                        value={this.state.oldPassword}
                                        onChange={(target) => {
                                            this.clearErrors();
                                            this.setState({ oldPassword: target.target.value })
                                        }} />
                                </Form.Item>
                                <Form.Item
                                    label="Address Line 1"
                                    colon={false}
                                // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                >
                                    <Input
                                        size="large"
                                        value={this.state.oldPassword}
                                        onChange={(target) => {
                                            this.clearErrors();
                                            this.setState({ oldPassword: target.target.value })
                                        }} />
                                </Form.Item>
                                <Form.Item
                                    label="Address Line 2"
                                    colon={false}
                                // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                >
                                    <Input
                                        size="large"
                                        value={this.state.oldPassword}
                                        onChange={(target) => {
                                            this.clearErrors();
                                            this.setState({ oldPassword: target.target.value })
                                        }} />
                                </Form.Item>
                                <Row
                                    gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}
                                >
                                    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                        <Form.Item
                                            label="City"
                                            colon={false}
                                        // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                        // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                        >
                                            <Input
                                                size="large"
                                                value={this.state.oldPassword}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ oldPassword: target.target.value })
                                                }} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                                        <Form.Item
                                            label="State"
                                            colon={false}
                                        // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                        // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                        >
                                            <Input
                                                size="large"
                                                value={this.state.oldPassword}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ oldPassword: target.target.value })
                                                }} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                                        <Form.Item
                                            label="Zip Code"
                                            colon={false}
                                        // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                        // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                        >
                                            <Input
                                                size="large"
                                                value={this.state.oldPassword}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ oldPassword: target.target.value })
                                                }} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Divider />
                                <h2>Payment Information</h2>
                                <Row
                                    gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}
                                >
                                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                        <Form.Item
                                            label="Name on Card"
                                            colon={false}
                                        // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                        // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                        >
                                            <Input
                                                size="large"
                                                value={this.state.oldPassword}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ oldPassword: target.target.value })
                                                }} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                        <Form.Item
                                            label="Card Number"
                                            colon={false}
                                        // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                        // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                        >
                                            <Input
                                                size="large"
                                                value={this.state.oldPassword}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ oldPassword: target.target.value })
                                                }} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12} md={4} lg={4} xl={4}>
                                        <Form.Item
                                            label="Expiration Date"
                                            colon={false}
                                        // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                        // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                        >
                                            <Input
                                                size="large"
                                                value={this.state.oldPassword}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ oldPassword: target.target.value })
                                                }} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12} md={4} lg={4} xl={4}>
                                        <Form.Item
                                            label="CVV"
                                            colon={false}
                                        // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                        // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                        >
                                            <Input
                                                size="large" type="password"
                                                value={this.state.oldPassword}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ oldPassword: target.target.value })
                                                }} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        }
                        {
                            this.state.current === 2
                            &&
                            <div className="order-confirmation-wrapper">
                                <img src={require('../../../images/confirmation.gif')} />
                                <h3>
                                    Your order has been placed!<br />
                                    <a onClick={() => this.props.history.push('/orders')}>Track order status</a>
                                </h3>
                            </div>
                        }
                    </Card>
                    <div className="steps-action">
                        {
                            current === 0
                            &&
                            <Button
                                className="steps-action-next-button"
                                type="primary"
                                size="large"
                                onClick={() => this.next()}
                            >Proceed to Checkout</Button>
                        }
                        {
                            current === 1
                            &&
                            <Button
                                size="large"
                                onClick={() => this.prev()}
                            >Back</Button>
                        }
                        {
                            current === 1
                            &&
                            <Button
                                className="steps-action-next-button"
                                type="primary"
                                size="large"
                                onClick={() => this.next()}
                            >Place Order</Button>
                        }
                        {/* {
                            current === 2
                            &&
                            <Button
                                className="steps-action-next-button"
                                type="primary"
                                size="large"
                                onClick={() => this.props.history.push('/orders')}
                            >Track Order</Button>
                        } */}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CartWrapper);