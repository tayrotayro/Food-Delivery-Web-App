import 'antd-mobile/dist/antd-mobile.css';
import { Icon } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';


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
        }  else if (pathname === '/driver-active') {
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
                            <Icon type="inbox" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        selectedIcon={
                            <Icon type="inbox" style={{ fontSize: '22px', height: '25px' }} />
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
                            <Icon type="schedule" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        selectedIcon={
                            <Icon type="schedule" style={{ fontSize: '22px', height: '25px' }} />
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
                            <Icon type="user" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        selectedIcon={
                            <Icon type="user" style={{ fontSize: '22px', height: '25px' }} />
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