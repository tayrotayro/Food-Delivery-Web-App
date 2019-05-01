import React, { Component } from 'react';
import { InputNumber } from 'antd';
import './EditableOrderItem.css';

class EditableOrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="order-item-wrapper">
                <div className="order-item-quantity">
                    <InputNumber
                        style={{ width: '100%' }}
                        min={1} max={20}
                        defaultValue={1}
                        onChange={() => { }} />
                </div>
                <div className="order-item-details">
                    <h3>3pc Chicken Dinner</h3>
                    <p>Spicy</p>
                    <p>Leg & Thigh</p>
                    <p>Fanta Strawberry</p>
                    <p>Reg Coleslaw</p>
                    <p>Reg Mashed Potatoes with Cajun Gravy</p>
                    <p>Reg Cajun Rice</p>
                    <div className="remove-item-button-wrapper">
                        <span className="remove-item-button">Remove</span>
                    </div>
                </div>
                <div className="order-item-total">
                    <h3>$14.06</h3>
                </div>
            </div>
        )
    }
}

export default EditableOrderItem;