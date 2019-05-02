import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Card, Rate } from 'antd';
import './UserHomeRestaurantCard.css';

class UserHomeRestaurantCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                    className="user-home-restaurant-card"
                    bordered={false}
                    cover={<img alt="example" src={restaurant.pictureURL} />}
                    onClick={() => this.props.onClick()}
                >
                    <div className="restaurant-title">{restaurant.name}</div>
                    <div className="restaurant-subtitle">{this.displayPriceRange(restaurant.priceRange)} • {restaurant.description}</div>
                    <span>
                        <Rate disabled allowHalf defaultValue={4.5} />
                        <span className="ant-rate-text">(68)</span>
                    </span>
                </Card>
            </div>
        )
    }
}

export default withRouter(UserHomeRestaurantCard);