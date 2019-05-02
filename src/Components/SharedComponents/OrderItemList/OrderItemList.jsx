import React, { Component } from 'react';
import { Popover, Icon } from 'antd';
import EditableOrderItem from './EditableOrderItem';
import UneditableOrderItem from './UneditableOrderItem';
import './OrderItemList.css';

class OrderItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // componentDidMount() {
    //     let subtotal = 0;

    //     this.props.editableItems.forEach(item => {
    //         subtotal = subtotal + item.total;
    //     })

    //     const tax = parseFloat((subtotal * 7 / 100).toFixed(2));
    //     const total = parseFloat((subtotal + tax + 4.99).toFixed(2));

    //     this.setState({
    //         subtotal,
    //         tax,
    //         total
    //     })
    // }

    render() {
        return (
            <div className="order-item-list-wrapper">
                {
                    this.props.isEditable
                    &&
                    <div>
                        {
                            this.props.editableItems.map(item => {
                                return <EditableOrderItem item={item} />
                            })
                        }
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
                        <div className="amount">${this.props.subtotal}</div>
                    </div>
                    <div className="order-breakdown-details">
                        <div className="title">Tax (7.00%)</div>
                        <div className="amount">${this.props.tax}</div>
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
                        <div className="amount">${this.props.total}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderItemList;