import React, { Component } from 'react';
import { message, Row, Col } from 'antd';
import CartWrapper from './Cart/CartWrapper';
import HomeWrapper from './Home/HomeWrapper';
import OrderWrapper from './Orders/OrderWrapper';
import ProfileWrapper from './Profile/ProfileWrapper';
import SearchWrapper from './Search/SearchWrapper';
import AppFooter from '../AppFooter';
import UserTabBar from './UserTabBar';
import { Redirect } from 'react-router-dom';
import './UserLayout.css';

class UserLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (!localStorage.getItem('loggedInUserId')) {
            message.error('You have to sign in first to access this page.', 5);
            return <Redirect to="/authentication" />
        }

        return (
            <div className="user-layout-wrapper">
                <Row className="user-content-responsive-wrapper">
                    <Col xs={0} sm={0} md={0} lg={1} xl={2}></Col>
                    <Col xs={24} sm={24} md={24} lg={22} xl={20}>
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
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={1} xl={2}></Col>
                </Row>
                <AppFooter />
                <UserTabBar />
            </div>
        )
    }
}

export default UserLayout;