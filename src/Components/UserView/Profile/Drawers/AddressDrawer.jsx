import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, PageHeader, Icon, Button } from 'antd';
import './AddressDrawer.css';

class AddressDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Drawer
                className="address-drawer"
                title={<PageHeader
                    title="ADDRESSES"
                    onBack={() => this.props.onClose()}
                />}
                placement="right"
                closable={false}
                onClose={this.props.onClose}
                visible={this.props.isOpen}
                destroyOnClose
            >
                <div className="empty-drawer">
                    <Icon className="empty-drawer-icon" type="home" />
                    <p>You have no saved address</p>
                    <Button size="large" type="primary">
                        Add new address
                    </Button>
                </div>
            </Drawer>
        )
    }
}

export default withRouter(AddressDrawer);