import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, PageHeader, Tabs } from 'antd';
import './MenuDrawer.css';

const TabPane = Tabs.TabPane;

class MenuDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // Fetch menu data
    }

    render() {
        <Drawer
            className="restaurant-menu-drawer"
            title={<PageHeader
                title="RICE & SPICE - INFORMATION"
                onBack={() => this.props.onClose()}
            />}
            placement="right"
            closable={false}
            onClose={this.props.onClose}
            visible={this.props.isOpen}
            destroyOnClose
        >
            <Tabs
                hideAdd
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
            >

            </Tabs>
        </Drawer>
    }
}