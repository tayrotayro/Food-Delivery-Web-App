import React, { Component } from 'react';
import { Divider } from 'antd';
import axios from 'axios';

class OwnerHomeWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        const baseUserId = localStorage.getItem('loggedInUserId');

        axios.get(`http://localhost:5000/api/restaurant/${baseUserId}`)
            .then(response => {
                this.setState({
                    restaurants: response.data.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="owner-home">
                <h1>Owner Home</h1>
                <Divider >My Restaurants</Divider>
                {
                    this.state.restaurants.map(restaurant => {
                        return (
                            <div>
                                <h1>{restaurant.name}</h1>
                                <h3>{restaurant.phone}</h3>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default OwnerHomeWrapper;