import React, { Component } from 'react';
import { Popover, Icon } from 'antd';
import EditableOrderItem from './EditableOrderItem';
import UneditableOrderItem from './UneditableOrderItem';
import './OrderItemList.css';

// Props List: isEditable

class OrderItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="order-item-list-wrapper">
                {
                    this.props.isEditable
                    &&
                    <div>
                        <EditableOrderItem />
                        <EditableOrderItem />
                    </div>
                }
                {
                    !this.props.isEditable
                    &&
                    <div>
                        <UneditableOrderItem />
                        <UneditableOrderItem />
                    </div>
                }
                <div className={`${this.props.isEditable ? "with-padding" : "no-padding"}`}>
                    <div className="order-breakdown-details">
                        <div className="title">Subtotal</div>
                        <div className="amount">$37.02</div>
                    </div>
                    <div className="order-breakdown-details">
                        <div className="title">Tax</div>
                        <div className="amount">$3.33</div>
                    </div>
                    <div className="order-breakdown-details">
                        <div className="title">
                            Delivery Fee
                            <Popover placement="right" content={"Delivrd charges a fixed delivery fee"}>
                                <Icon style={{ marginLeft: '4px', fontSize: '12px' }} type="question-circle" />
                            </Popover>
                        </div>
                        <div className="amount">$4.99</div>
                    </div>
                    <div className="order-breakdown-total">
                        <div className="title">Total</div>
                        <div className="amount">$45.34</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderItemList;