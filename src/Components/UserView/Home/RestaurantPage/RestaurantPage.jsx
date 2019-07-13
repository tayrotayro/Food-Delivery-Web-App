import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Drawer, PageHeader, Row, Col, Modal, Input, Button, Icon } from 'antd';
import RestaurantMenuItem from './RestaurantMenuItem';
import axios from 'axios';
import displayPriceRange from '../../../../utils/displayPriceRange';
import displayHour from '../../../../utils/displayHour';
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
                this.setState({ openCustomizeModal: false, selectedMenuItem: null, itemQuantity: 1, specialInstructions: "" })
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
                <div className="user-restaurant-drawer-image"
                    style={{ backgroundImage: `url(${restaurant.pictureURL})` }}>
                    <div className="info">
                        <div className="restaurant-name">{restaurant.name}</div>
                        <div className="restaurant-details">{displayPriceRange(restaurant.priceRange)} • {restaurant.description}</div>
                        <div className="restaurant-address">
                            <Icon type="environment" />
                            {restaurant.address}
                        </div>
                        <div className="restaurant-hours">
                            <Icon type="clock-circle" />
                            <div>
                                <div className="restaurant-hours-row">
                                    <div className="day-of-week">Monday</div>
                                    <div className="open-time">{displayHour(restaurant.hours.mon.openTime)}</div>
                                    <div className="close-time">{displayHour(restaurant.hours.mon.closeTime)}</div>
                                </div>
                                <div className="restaurant-hours-row">
                                    <div className="day-of-week">Tuesday</div>
                                    <div className="open-time">{displayHour(restaurant.hours.tue.openTime)}</div>
                                    <div className="close-time">{displayHour(restaurant.hours.tue.closeTime)}</div>
                                </div>
                                <div className="restaurant-hours-row">
                                    <div className="day-of-week">Wednesday</div>
                                    <div className="open-time">{displayHour(restaurant.hours.wed.openTime)}</div>
                                    <div className="close-time">{displayHour(restaurant.hours.wed.closeTime)}</div>
                                </div>
                                <div className="restaurant-hours-row">
                                    <div className="day-of-week">Thursday</div>
                                    <div className="open-time">{displayHour(restaurant.hours.thu.openTime)}</div>
                                    <div className="close-time">{displayHour(restaurant.hours.thu.closeTime)}</div>
                                </div>
                                <div className="restaurant-hours-row">
                                    <div className="day-of-week">Friday</div>
                                    <div className="open-time">{displayHour(restaurant.hours.fri.openTime)}</div>
                                    <div className="close-time">{displayHour(restaurant.hours.fri.closeTime)}</div>
                                </div>
                                <div className="restaurant-hours-row">
                                    <div className="day-of-week">Saturday</div>
                                    <div className="open-time">{displayHour(restaurant.hours.sat.openTime)}</div>
                                    <div className="close-time">{displayHour(restaurant.hours.sat.closeTime)}</div>
                                </div>
                                <div className="restaurant-hours-row">
                                    <div className="day-of-week">Sunday</div>
                                    <div className="open-time">{displayHour(restaurant.hours.sun.openTime)}</div>
                                    <div className="close-time">{displayHour(restaurant.hours.sun.closeTime)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Row
                    className="user-restaurant-drawer-menu-items"
                    type="flex" justify="start" align="top"
                    gutter={{ xs: 12, sm: 12, md: 24, lg: 24, xl: 24 }}
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