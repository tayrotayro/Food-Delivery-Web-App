import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Steps, Button, Card, Icon, Form, Input, Divider, Row, Col } from 'antd';
import OrderItemList from '../../SharedComponents/OrderItemList/OrderItemList';
import Spinner from '../../Spinner';
import axios from 'axios';
import './CartWrapper.css';

const Step = Steps.Step;

class CartWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            current: 0,
            disablePlaceOrderButton: false,
            cart: null,
            subtotal: 0,
            tax: 0,
            total: 0,
            name: "",
            line1: "",
            line2: "",
            city: "",
            state: "",
            zip: "",
            nameOnCard: "",
            cardNumber: "",
            expDate: "",
            ccv: "",
            isPlacingOrder: false
        }
    }

    componentDidMount() {
        this.fetchCart();
    }

    fetchCart = () => {
        const cartId = localStorage.getItem('userCartId');
    
        axios.get(`http://localhost:5000/api/cart/${cartId}`)
            .then(response => {
                this.calculateTotal(response.data.data.items);
                this.setState({
                    loading: false,
                    cart: response.data.data
                })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    calculateTotal = (items) => {
        let subtotal = 0;

        items.forEach(item => {
            subtotal = subtotal + item.total;
        })

        const tax = parseFloat((subtotal * 7 / 100).toFixed(2));
        const total = parseFloat((subtotal + tax + 4.99).toFixed(2));

        this.setState({
            subtotal,
            tax,
            total
        })
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

    placeOrder = () => {
        this.setState({ isPlacingOrder: true });
        axios.post(`http://localhost:5000/api/order`, {
            userId: localStorage.getItem('loggedInUserId'),
            name: this.state.name,
            al1: this.state.line1,
            al2: this.state.line2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            cartId: localStorage.getItem('userCartId'),
            cardNumber: this.state.cardNumber,
            expMonth: this.state.expDate,
            expYear: this.state.expDate,
            ccv: this.state.ccv
        })
            .then(response => {
                this.next();
                this.resetCart();
            })
            .catch(err => console.log(err))
    }

    resetCart = () => {
        axios.post(`http://localhost:5000/api/cart/reset`, {
            userId: localStorage.getItem('loggedInUserId')
        })
            .then(response => {
                localStorage.setItem('userCartId', response.data.data);
            })
            .catch(err => console.log(err))
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
                            this.state.loading
                            &&
                            <Spinner />
                        }
                        {
                            (this.state.current === 0 && !this.state.loading)
                            &&
                            <OrderItemList isEditable={true} editableItems={this.state.cart.items}
                                subtotal={this.state.subtotal} tax={this.state.tax} total={this.state.total}
                                onUpdateItem={this.fetchCart}
                            />
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
                                        value={this.state.name}
                                        onChange={(target) => {
                                            this.clearErrors();
                                            this.setState({ name: target.target.value })
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
                                        value={this.state.line1}
                                        onChange={(target) => {
                                            this.clearErrors();
                                            this.setState({ line1: target.target.value })
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
                                        value={this.state.line2}
                                        onChange={(target) => {
                                            this.clearErrors();
                                            this.setState({ line2: target.target.value })
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
                                                value={this.state.city}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ city: target.target.value })
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
                                                value={this.state.state}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ state: target.target.value })
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
                                                value={this.state.zip}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ zip: target.target.value })
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
                                                value={this.state.nameOnCard}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ nameOnCard: target.target.value })
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
                                                value={this.state.cardNumber}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ cardNumber: target.target.value })
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
                                                value={this.state.expDate}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ expDate: target.target.value })
                                                }} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12} md={4} lg={4} xl={4}>
                                        <Form.Item
                                            label="CCV"
                                            colon={false}
                                        // validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                                        // help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                                        >
                                            <Input
                                                size="large" type="password"
                                                value={this.state.ccv}
                                                onChange={(target) => {
                                                    this.clearErrors();
                                                    this.setState({ ccv: target.target.value })
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
                                disable={this.state.isPlacingOrder}
                                onClick={() => this.placeOrder()}
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