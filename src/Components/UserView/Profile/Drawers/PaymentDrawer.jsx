import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, PageHeader, Icon, Button } from 'antd';
import './PaymentDrawer.css';

class PaymentDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Drawer
                className="payment-drawer"
                title={<PageHeader
                    title="PAYMENTS"
                    onBack={() => this.props.onClose()}
                />}
                placement="right"
                closable={false}
                onClose={this.props.onClose}
                visible={this.props.isOpen}
                destroyOnClose
            >
                <div className="empty-drawer">
                    <Icon className="empty-drawer-icon" type="wallet" />
                    <p>You have no saved payment</p>
                    <Button size="large" type="primary">
                        Add new payment
                    </Button>
                </div>
            </Drawer>
        )
    }
}

export default withRouter(PaymentDrawer);