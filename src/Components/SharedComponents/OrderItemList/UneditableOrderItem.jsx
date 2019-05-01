import React, { Component } from 'react';
import { Tag } from 'antd';
import './UneditableOrderItem.css';

class UneditableOrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="uneditable-order-item-wrapper">
                <div className="uneditable-order-item-details">
                    <h3>3pc Chicken Dinner</h3><Tag>2</Tag>
                    <p>Spicy</p>
                    <p>Leg & Thigh</p>
                    <p>Fanta Strawberry</p>
                    <p>Reg Coleslaw</p>
                    <p>Reg Mashed Potatoes with Cajun Gravy</p>
                    <p>Reg Cajun Rice</p>
                </div>
                <div className="uneditable-order-item-total">
                    <h3>$14.06</h3>
                </div>
            </div>
        )
    }
}

export default UneditableOrderItem;