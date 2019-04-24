import React, { Component } from 'react';
import { Card } from 'antd';
import '../../../style/Dashboard.css';
import Spinner from '../../Spinner';
import FeaturedRestaurantCard from './FeaturedRestaurantCard';

const { Meta } = Card;

const gridStyle = {
    width: '25%',
    textAlign: 'center',
}

class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            loading: true
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
            <div className="hello">
                <FeaturedRestaurantCard />
            </div>
        )
    }
}

export default DashboardContent;