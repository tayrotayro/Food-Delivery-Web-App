import { TabBar } from 'antd-mobile';
import { Icon } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';

class OwnerTabBar extends Component {
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

        if (pathname === "/driver-home") {
            this.setState({ selectedTab: "driverHomeTab" })
        } else if (pathname === '/driver-active') {
            this.setState({ selectedTab: "driverActiveTab" })
        } else if (pathname === '/driver-past') {
            this.setState({ selectedTab: "driverPastTab" })
        } else if (pathname === '/driver-profile') {
            this.setState({ selectedTab: "driverProfileTab" })
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
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
                        selected={this.state.selectedTab === 'driverHomeTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'driverHomeTab',
                            });
                            this.props.history.push("/driver-home");
                        }}
                        data-seed="logId"
                    >
                        {/* {this.renderContent('Life')} */}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <Icon type="inbox" />
                        }
                        selectedIcon={
                            <Icon type="inbox" />
                        }
                        title="Active Orders"
                        key="Orders"
                        badge={1}
                        selected={this.state.selectedTab === 'driverActiveTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'driverActiveTab',
                            });
                            this.props.history.push("/driver-active");
                        }}
                    >
                        {/* {this.renderContent('Friend')} */}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <Icon type="schedule" />
                        }
                        selectedIcon={
                            <Icon type="schedule" />
                        }
                        title="Past Orders"
                        key="Cart"
                        selected={this.state.selectedTab === 'driverPastTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'driverPastTab',
                            });
                            this.props.history.push("/driver-past");
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
                        selected={this.state.selectedTab === 'driverProfileTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'driverProfileTab',
                            });
                            this.props.history.push("/driver-profile");
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

export default withRouter(OwnerTabBar);