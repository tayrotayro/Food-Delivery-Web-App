import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Card } from 'antd';

class RestaurantMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const item = this.props.item;
        return (
            <Card
                className="restaurant-menu-item-card"
                hoverable
                onClick={() => this.props.onClick()}
            >
                <div className="restaurant-menu-item-card-info">
                    <h3>{item.name}</h3>
                    <h2>${item.basePrice}</h2>
                </div>
                <div>{item.description}</div>
            </Card>
        )
    }
}

export default withRouter(RestaurantMenuItem);