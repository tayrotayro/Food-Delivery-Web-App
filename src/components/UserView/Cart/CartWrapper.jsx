import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Steps, Button, Card, Icon } from 'antd';
import OrderItemList from '../../SharedComponents/OrderItemList/OrderItemList';
import './CartWrapper.css';

const Step = Steps.Step;

class CartWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
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
                        <OrderItemList isEditable={true} />
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
                        {
                            current === 2
                            &&
                            <Button
                                className="steps-action-next-button"
                                type="primary"
                                size="large"
                                onClick={() => this.props.history.push('/orders')}
                            >Track Order</Button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CartWrapper);