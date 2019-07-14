import React, { Component } from 'react';
import { InputNumber, message } from 'antd';
import axios from 'axios';
import './EditableOrderItem.css';

class EditableOrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: null
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/menu-item/get/${this.props.item.menuItemId}`)
            .then(response => {
                this.setState({ menuItem: response.data.data })
            })
            .catch(err => console.log(err))
    }

    removeItem = () => {
        axios.put(`http://localhost:5000/api/delete-from-cart/${localStorage.getItem('userCartId')}`, {
            itemInCartId: this.props.item._id
        })
            .then(response => {
                this.props.onUpdateItem();
                message.success(response.data.message);
            })
            .catch(err => console.log(err))
    }

    render() {
        const item = this.props.item;

        return (
            <div className="order-item-wrapper">
                <div className="order-item-quantity">
                    <InputNumber
                        style={{ width: '100%' }}
                        min={1} max={20}
                        defaultValue={item.quantity}
                        onChange={() => { }} />
                </div>
                <div className="order-item-details">
                    <h3>{this.state.menuItem ? this.state.menuItem.name : ""}</h3>
                    <p>{item.description}</p>
                    <div className="remove-item-button-wrapper">
                        <span className="remove-item-button" onClick={this.removeItem}>Remove</span>
                    </div>
                </div>
                <div className="order-item-total">
                    <h3>{item.total}</h3>
                </div>
            </div>
        )
    }
}

export default EditableOrderItem;