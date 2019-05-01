import { TabBar } from 'antd-mobile';
import { Icon } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import '../../style/TabBar.css';

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
                            <Icon type="file-markdown" />
                        }
                        selectedIcon={
                            <Icon type="file-markdown" />
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
                            <Icon type="inbox" />
                        }
                        selectedIcon={
                            <Icon type="inbox" />
                        }
                        title="Active Orders"
                        key="Orders"
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
                            <Icon type="schedule" />
                        }
                        selectedIcon={
                            <Icon type="schedule" />
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
                            <Icon type="user" />
                        }
                        selectedIcon={
                            <Icon type="user" />
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