import { Card, Button, Icon } from 'antd';
import React, { Component } from 'react';
import axios from 'axios';

class FeaturedRestaurantCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: []
        }
    }

    componentDidMount() {
        axios.get('https://localhost:5000/api/find-restaurants')
            .then(response => {
                console.log(response);
                this.setState({
                    restaurant: response.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }



    render() {
        return (
            <div>
                {
                    this.state.restaurant.map(restaurant => 
                        
                            <Card
                                hoverable
                                style={{ width: "240px", padding: "20px" }}
                                cover={<img alt="example" src={restaurant.pictureURL} />}
                                actions={[<Button>view website</Button>, <Button type='primary'>view menu</Button>]}
                            >
                                <div>{restaurant.name}</div>
                                <div>
                                    {restaurant.price} | {restaurant.description}
                                </div>
                            </Card>
                    
                    )
                }
            </div>
        )
    }
}




export default FeaturedRestaurantCard;