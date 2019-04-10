import React, { Component } from 'react';
import CartWrapper from './Cart/CartWrapper';
import HomeWrapper from './Home/HomeWrapper';
import OrderWrapper from './Orders/OrderWrapper';
import ProfileWrapper from './Profile/ProfileWrapper';
import SearchWrapper from './Search/SearchWrapper';
import UserTabBar from './UserTabBar';
import UserMenu from "./Home/UserMenu";
import { Redirect } from 'react-router-dom';


class UserLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (!localStorage.getItem('loggedInUserId')) {
            return <Redirect to="/authentication" />
        }
        return (
            <div className="user-layout-wrapper">
                <div className="user-content">
                    {
                        this.props.history.location.pathname === '/'
                        &&
                        <HomeWrapper />
                    }
                    {
                        this.props.history.location.pathname === '/search'
                        &&
                        <SearchWrapper />
                    }
                    {
                        this.props.history.location.pathname === '/orders'
                        &&
                        <OrderWrapper />
                    }
                    {
                        this.props.history.location.pathname === '/cart'
                        &&
                        <CartWrapper />
                    }
                    {
                        this.props.history.location.pathname === '/profile'
                        &&
                        <ProfileWrapper />
                    }
                    {
                        this.props.history.location.pathname === '/restaurant-menu'
                        &&
                        <UserMenu />
                    }
                </div>
                <UserTabBar />
            </div>
        )
    }
}

export default UserLayout;