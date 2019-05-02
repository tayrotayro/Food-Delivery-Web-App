import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, PageHeader } from 'antd';
import AddNewRestaurantForm from '../../Profile/AddNewRestaurantForm';
import './AddRestaurantDrawer.css';

class AddRestaurantDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Drawer
                className="add-restaurant-drawer"
                title={<PageHeader
                    title="REGISTER NEW RESTAURANT"
                    onBack={() => this.props.onClose()}
                />}
                placement="right"
                closable={false}
                onClose={this.props.onClose}
                visible={this.props.isOpen}
                destroyOnClose
                maskClosable={false}
            >
                <AddNewRestaurantForm />
            </Drawer>
        )
    }
}

export default withRouter(AddRestaurantDrawer);