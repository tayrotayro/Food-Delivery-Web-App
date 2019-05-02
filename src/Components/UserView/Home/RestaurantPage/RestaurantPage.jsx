import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Drawer, PageHeader, Row, Col, Modal, Input, Button } from 'antd';
import RestaurantMenuItem from './RestaurantMenuItem';
import axios from 'axios';
import './RestaurantPage.css';

const { TextArea } = Input;

class RestaurantPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openCustomizeModal: false,
            selectedMenuItem: null,
            itemQuantity: 1,
            specialInstructions: ""
        }
    }

    openCustomizeModal = (menuItem) => {
        this.setState({
            openCustomizeModal: true,
            selectedMenuItem: menuItem
        })
    }

    addToCart = () => {
        const cartId = localStorage.getItem('userCartId');

        axios.put(`http://localhost:5000/api/add-to-cart/${cartId}`, {
            menuItemId: this.state.selectedMenuItem._id,
            specialInstructions: this.state.specialInstructions,
            quantity: this.state.itemQuantity,
            total: this.state.selectedMenuItem.basePrice * this.state.itemQuantity
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const restaurant = this.props.restaurant;
        if (!restaurant) {
            return null;
        }

        return (
            <Drawer
                className="user-restaurant-drawer"
                title={<PageHeader
                    title={restaurant.name}
                    onBack={this.props.onClose}
                />}
                placement="right"
                closable={false}
                onClose={this.props.onClose}
                visible={this.props.isOpen}
                destroyOnClose
            >
                <Row
                    gutter={{ xs: 16, sm: 16, md: 32, lg: 32, xl: 32 }}
                >
                    {
                        this.props.menuItems.map(menuItem => {
                            return (
                                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={menuItem._id}>
                                    <RestaurantMenuItem item={menuItem} onClick={() => this.openCustomizeModal(menuItem)} />
                                </Col>
                            )
                        })
                    }
                </Row>
                <Modal
                    visible={this.state.openCustomizeModal}
                    title={this.state.selectedMenuItem ? this.state.selectedMenuItem.name : ""}
                    okText={`Add ${this.state.itemQuantity} to cart`}
                    onCancel={() => { this.setState({ openCustomizeModal: false }) }}
                    afterClose={() => this.setState({ selectedMenuItem: null, itemQuantity: 1 })}
                    onOk={() => this.addToCart()}
                >
                    <TextArea placeholder="Special instructions" rows={5}
                        value={this.state.specialInstructions}
                        onChange={(event) => this.setState({ specialInstructions: event.target.value })}
                    ></TextArea>
                    <div className="menu-item-customize-actions">
                        <div className="quantity-update">
                            <Button shape="circle" icon="minus" size="large"
                                disabled={this.state.itemQuantity === 1}
                                onClick={() => this.setState({ itemQuantity: this.state.itemQuantity - 1 })}

                            />
                            <div className="quantity">{this.state.itemQuantity}</div>
                            <Button shape="circle" icon="plus" size="large"
                                disabled={this.state.itemQuantity === 20}
                                onClick={() => this.setState({ itemQuantity: this.state.itemQuantity + 1 })}
                            />
                        </div>
                        <div>
                            <h2>${this.state.selectedMenuItem ? this.state.selectedMenuItem.basePrice * this.state.itemQuantity : '0'}</h2>
                        </div>
                    </div>
                </Modal>
            </Drawer>
        )
    }
}

export default withRouter(RestaurantPage);