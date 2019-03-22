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

        if (pathname === "/owner-home") {
            this.setState({ selectedTab: "ownerHomeTab" })
        } else if (pathname === '/owner-menu') {
            this.setState({ selectedTab: "ownerMenuTab" })
        } else if (pathname === '/owner-active') {
            this.setState({ selectedTab: "ownerActiveTab" })
        } else if (pathname === '/owner-past') {
            this.setState({ selectedTab: "ownerPastTab" })
        } else if (pathname === '/owner-profile') {
            this.setState({ selectedTab: "ownerProfileTab" })
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
                        selected={this.state.selectedTab === 'ownerHomeTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'ownerHomeTab',
                            });
                            this.props.history.push("/owner-home");
                        }}
                        data-seed="logId"
                    >
                        {/* {this.renderContent('Life')} */}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <Icon type="file-markdown" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        selectedIcon={
                            <Icon type="file-markdown" style={{ fontSize: '22px', height: '25px' }} />
                        }
                        title="Menu"
                        key="Search"
                        selected={this.state.selectedTab === 'ownerMenuTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'ownerMenuTab',
                            });
                            this.props.history.push("/owner-menu");
                        }}
                        data-seed="logId1"
                    >
                        {/* {this.renderContent('Koubei')} */}
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
                        selected={this.state.selectedTab === 'ownerActiveTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'ownerActiveTab',
                            });
                            this.props.history.push("/owner-active");
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
                        selected={this.state.selectedTab === 'ownerPastTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'ownerPastTab',
                            });
                            this.props.history.push("/owner-past");
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
                        selected={this.state.selectedTab === 'ownerProfileTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'ownerProfileTab',
                            });
                            this.props.history.push("/owner-profile");
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