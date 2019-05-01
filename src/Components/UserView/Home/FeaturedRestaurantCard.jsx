import { Card, Button, Icon } from 'antd';
import React, { Component } from 'react';

class FeaturedRestaurantCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        const Price = "$$";
        const Description = "description";



        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://citygroceryonline.com/wp-content/uploads/2015/05/boure-logo.png" />}
                actions = {[<Button>view website</Button>,<Button type = 'primary'>view menue</Button>]}
          >
          <div>Boure'</div>
                <div>
                    {Price} | {Description}
                </div>
               
               
            </Card>

        )
    }
}

export default FeaturedRestaurantCard;