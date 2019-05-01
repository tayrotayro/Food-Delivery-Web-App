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

    render() {
        return (
            <Card
                className="user-home-restaurant-card"
                bordered={false}
                cover={<img alt="example" src="https://samuivillaretreat.com/blog/wp-content/uploads/2017/03/Amazing-Local-Dishes-to-try-in-Koh-Samui.jpg" />}
            >
                <div className="restaurant-title">Pick Thai (1001 Jackson Avenue)</div>
                <div className="restaurant-subtitle">$ • Asian • Noodles</div>
                <span>
                    <Rate disabled allowHalf defaultValue={4.5} />
                    <span className="ant-rate-text">68</span>
                </span>
            </Card>
        )
    }
}

export default withRouter(UserHomeRestaurantCard);