import { TabBar } from 'antd-mobile';
import { Icon } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';

class UserTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'homeTab',
            hidden: false,
            fullScreen: false,
        };
    }

    componentDidMount() {
        const pathname = this.props.history.location.pathname;

        if (pathname === "/") {
            this.setState({ selectedTab: "homeTab" })
        } else if (pathname === '/search') {
            this.setState({ selectedTab: "searchTab" })
        } else if (pathname === '/orders') {
            this.setState({ selectedTab: "orderTab" })
        } else if (pathname === '/cart') {
            this.setState({ selectedTab: "cartTab" })
        } else if (pathname === '/profile') {
            this.setState({ selectedTab: "profileTab" })
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                // hidden={this.state.hidden}
                // tabBarPosition="bottom"
                >
                    <TabBar.Item
                        icon={
                            <Icon type="home" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        selectedIcon={
                            <Icon type="home" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        title="Home"
                        key="Home"
                        selected={this.state.selectedTab === 'homeTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'homeTab',
                            });
                            this.props.history.push("/");
                        }}
                        data-seed="logId"
                    >
                        {/* {this.renderContent('Life')} */}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <Icon type="search" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        selectedIcon={
                            <Icon type="search" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        title="Search"
                        key="Search"
                        selected={this.state.selectedTab === 'searchTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'searchTab',
                            });
                            this.props.history.push("/search");
                        }}
                        data-seed="logId1"
                    >
                        {/* {this.renderContent('Koubei')} */}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <Icon type="ordered-list" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        selectedIcon={
                            <Icon type="ordered-list" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        title="Orders"
                        key="Orders"
                        badge={1}
                        selected={this.state.selectedTab === 'orderTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'orderTab',
                            });
                            this.props.history.push("/orders");
                        }}
                    >
                        {/* {this.renderContent('Friend')} */}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <Icon type="shopping-cart" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        selectedIcon={
                            <Icon type="shopping-cart" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        title="Cart"
                        key="Cart"
                        selected={this.state.selectedTab === 'cartTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'cartTab',
                            });
                            this.props.history.push("/cart");
                        }}
                        data-seed="logId1"
                    >
                        {/* {this.renderContent('Koubei')} */}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <Icon type="user" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        selectedIcon={
                            <Icon type="user" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        title="Profile"
                        key="Profile"
                        selected={this.state.selectedTab === 'profileTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'profileTab',
                            });
                            this.props.history.push("/profile");
                        }}
                        data-seed="logId1"
                    >
                        {/* {this.renderContent('Koubei')} */}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default withRouter(UserTabBar);