import { TabBar } from 'antd-mobile';
import { Icon } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import '../../style/TabBar.css';

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
        this.updateChoosenTab();
        this.props.history.listen(() => {
            this.updateChoosenTab();
        });
    }

    updateChoosenTab = () => {
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
            <div style={{ position: 'fixed', width: '100%', bottom: 0, zIndex: 10 }}>
                <TabBar
                    unselectedTintColor="#595959"
                    tintColor="#1890ff"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        icon={
                            <Icon type="home" />
                        }
                        selectedIcon={
                            <Icon type="home" />
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
                            <Icon type="search" />
                        }
                        selectedIcon={
                            <Icon type="search" />
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
                            <Icon type="ordered-list" />
                        }
                        selectedIcon={
                            <Icon type="ordered-list" />
                        }
                        title="Orders"
                        key="Orders"
                        // badge={1}
                        // dot
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
                            <Icon type="shopping-cart" />
                        }
                        selectedIcon={
                            <Icon type="shopping-cart" />
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
                            <Icon type="user" />
                        }
                        selectedIcon={
                            <Icon type="user" />
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