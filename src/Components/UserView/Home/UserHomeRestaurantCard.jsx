import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Card, Rate } from 'antd';
import displayPriceRange from '../../../utils/displayPriceRange';
import './UserHomeRestaurantCard.css';

class UserHomeRestaurantCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                    <div className="restaurant-title">{`${restaurant.name} (${restaurant.address})`}</div>
                    <div className="restaurant-subtitle">{displayPriceRange(restaurant.priceRange)} • {restaurant.description}</div>
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