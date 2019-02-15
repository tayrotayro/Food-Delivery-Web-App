import React, { Component } from 'react';
import { Avatar } from 'antd';




class RestaurantView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="header-view">
            <Avatar size={150} icon="user" />
            </div>
            )
    }

}

export default RestaurantView;