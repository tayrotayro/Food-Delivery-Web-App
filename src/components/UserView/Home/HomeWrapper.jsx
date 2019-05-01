import React, { Component } from 'react';
import { Card, Button } from 'antd';
import Spinner from '../../Spinner';
import axios from 'axios';


class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            loading: true,
            restaurants: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/restaurant')
            .then(response => {
                console.log(response);
                this.setState({
                    restaurants: response.data.data,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ loading: false })
    //     }, 1000)
    // }

    render() {
        if (this.state.loading) {
            return <Spinner />
        }
    
        return (
            <div className="card">
            <Card>
             <div>
                {
                    this.state.restaurants === null
                    &&
                    <div>
                        <h1>No restaurants in your area</h1>
                    </div>
                }
                {
                    this.state.restaurants != null
                    &&
                    this.state.restaurants.map(restaurant => {
                        return (
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
                    )
                }
            </div>
            </Card>
            </div>
        )
    }
}

export default DashboardContent;