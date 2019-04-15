import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Modal, Button, Form, Input } from 'antd';

class CreateMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible, loading } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Add Menu Item
                </Button>
                <Modal
                    visible={visible}
                    maskClosable={false}
                    title="Add Menu Item"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Create Menu Item
            </Button>,
                    ]}
                >
                    <Form>
                        <Form.Item>
                            <Input placeholder="Name"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Description"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Price"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Picture URL"></Input>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default withRouter(CreateMenuItem);