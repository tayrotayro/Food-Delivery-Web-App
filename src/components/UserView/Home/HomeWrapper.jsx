import React, { Component } from 'react';
import Spinner from '../../Spinner';
import FeaturedRestaurantCard from './FeaturedRestaurantCard';


class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            loading: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1000)
    }

    render() {
        if (this.state.loading) {
            return <Spinner />
        }
    
        return (
            <div className="card">
                <FeaturedRestaurantCard />
            </div>
        )
    }
}

export default DashboardContent;