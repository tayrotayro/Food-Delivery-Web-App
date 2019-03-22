import React, { Component } from 'react';
import { Divider } from 'antd';

class OwnerHomeWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="owner-home">
            <h1>Owner Home</h1>
            <Divider >My Restaurants</Divider>
            </div>
        )
    }
}

export default OwnerHomeWrapper;