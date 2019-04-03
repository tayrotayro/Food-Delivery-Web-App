import { Card } from 'antd';
import React, { Component } from 'react';

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://citygroceryonline.com/wp-content/uploads/2015/05/boure-logo.png" />}
            >
                <Card
                    title="Boure'"
                >Upscale dining on the Square.</Card>
            </Card>

        )
    }
}

export default Restaurant;