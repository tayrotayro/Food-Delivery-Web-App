import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Card, Row, Col, Icon } from 'antd';
import InfoDrawer from './Drawers/InfoDrawer';
import HoursDrawer from './Drawers/HoursDrawer';
import MenuDrawer from './Drawers/MenuDrawer';
import './OwnerHomeRestaurantCard.css';

class OwnerHomeRestaurantCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openInfoDrawer: false,
            openHoursDrawer: false,
            openMenuDrawer: true
        }
    }

    displayPriceRange = (number) => {
        if (number === 1) return '$'
        else if (number === 2) return '$$'
        else if (number === 3) return '$$$'
        else if (number === 4) return '$$$$'
    }

    render() {
        const restaurant = this.props.restaurant;

        return (
            <div>
                <Card
                    className="owner-home-restaurant-card"
                    title={restaurant.name}
                    loading={false}
                >
                    <div className="onwner-home-restaurant-card-info">
                        <h3>{restaurant.address}</h3>
                        <div>{this.displayPriceRange(restaurant.priceRange)} • {restaurant.description}</div>
                        <div>{restaurant.phone}</div>
                    </div>
                    <div className="owner-home-restaurant-card-action">
                        <Row>
                            <Col xs={8} sm={8}>
                                <a onClick={() => this.setState({ openInfoDrawer: true })}><Icon type="edit" /> Info</a>
                            </Col>
                            <Col xs={8} sm={8}>
                                <a onClick={() => this.setState({ openHoursDrawer: true })}><Icon type="clock-circle" /> Hours</a>
                            </Col>
                            <Col xs={8} sm={8}>
                                <a onClick={() => this.setState({ openMenuDrawer: true })}><Icon type="file-markdown" /> Menu</a>
                            </Col>
                        </Row>
                    </div>
                </Card>
                <InfoDrawer isOpen={this.state.openInfoDrawer} onClose={() => this.setState({ openInfoDrawer: false })} />
                <HoursDrawer
                    hours={restaurant.hours}
                    isOpen={this.state.openHoursDrawer}
                    onClose={() => this.setState({ openHoursDrawer: false })} />
                <MenuDrawer
                    menuId={restaurant.menuId}
                    isOpen={this.state.openMenuDrawer}
                    onClose={() => this.setState({ openMenuDrawer: false })}
                />
            </div>
        )
    }
}

export default withRouter(OwnerHomeRestaurantCard);