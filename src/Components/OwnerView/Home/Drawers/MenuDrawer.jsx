import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, PageHeader, Card, Row, Col, Modal, Form, Input, Button } from 'antd';
import './MenuDrawer.css';

class MenuDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openEditModal: false,
            openAddModal: false,
            menuItemIdToBeEditted: null,
            editName: "",
            editDescription: "",
            editPrice: null,
            editPictureUrl: "",
            newName: "",
            newDescription: "",
            newPrice: null,
            newPictureUrl: ""
        }
    }

    componentDidMount() {
        // Fetch menu data
    }

    render() {
        return (
            <Drawer
                className="restaurant-menu-drawer"
                title={<PageHeader
                    title="RICE & SPICE - MENU"
                    onBack={() => this.props.onClose()}
                />}
                placement="right"
                closable={false}
                onClose={this.props.onClose}
                visible={this.props.isOpen}
                destroyOnClose
            >
                <div className="menu-button-wrapper">
                    <Button type="primary" size="large"
                        onClick={() => this.setState({ openAddModal: true })}>Add new item</Button>
                </div>
                <Row
                    gutter={{ xs: 16, sm: 16, md: 32, lg: 32, xl: 32 }}
                >
                    {
                        [1, 2, 3].map(menuItem => {
                            return (
                                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                    <Card
                                        className="menu-item"
                                        title="Noodles"
                                        extra={<a href="#" onClick={() => this.setState({ openEditModal: true })}>Edit</a>}
                                    >
                                        <p>Food description</p>
                                        <h2>$10.95</h2>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Modal
                    className="edit-menu-item-modal"
                    title="Edit Menu Item"
                    visible={this.state.openEditModal}
                    okText="Update"
                    onCancel={() => {
                        this.setState({
                            openEditModal: false,
                            menuItemIdToBeEditted: null,
                            editName: "",
                            editDescription: "",
                            editPrice: null,
                            editPictureUrl: ""
                        })
                    }}
                >
                    <Form>
                        <Form.Item
                            label="Menu Item Name"
                            colon={false}
                            style={{ marginBottom: '8px' }}>
                            <Input required
                                size="large"
                                onChange={(result) => {
                                    this.setState({
                                        editName: result.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            colon={false}
                            style={{ margin: '8px 0px' }}>
                            <Input required
                                size="large"
                                onChange={(result) => {
                                    this.setState({
                                        editDescription: result.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item
                            label="Base Price"
                            colon={false}
                            style={{ margin: '8px 0px' }}>
                            <Input required
                                size="large"
                                onChange={(result) => {
                                    this.setState({
                                        editPrice: result.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item
                            label="Picture URL"
                            colon={false}
                            style={{ margin: '8px 0px' }}>
                            <Input required
                                size="large"
                                onChange={(result) => {
                                    this.setState({
                                        editPictureUrl: result.target.value
                                    })
                                }} />
                        </Form.Item>
                    </Form>
                </Modal>
                <Modal
                    className="add-menu-item-modal"
                    title="Add Menu Item"
                    visible={this.state.openAddModal}
                    okText="Add"
                    onCancel={() => {
                        this.setState({
                            openAddModal: false,
                            newName: "",
                            newDescription: "",
                            newPrice: null,
                            newPictureUrl: ""
                        })
                    }}
                >
                    <Form>
                        <Form.Item
                            label="Menu Item Name"
                            colon={false}
                            style={{ marginBottom: '8px' }}>
                            <Input required
                                size="large"
                                onChange={(result) => {
                                    this.setState({
                                        newName: result.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            colon={false}
                            style={{ margin: '8px 0px' }}>
                            <Input required
                                size="large"
                                onChange={(result) => {
                                    this.setState({
                                        newDescription: result.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item
                            label="Base Price"
                            colon={false}
                            style={{ margin: '8px 0px' }}>
                            <Input required
                                size="large"
                                onChange={(result) => {
                                    this.setState({
                                        newPrice: result.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item
                            label="Picture URL"
                            colon={false}
                            style={{ margin: '8px 0px' }}>
                            <Input required
                                size="large"
                                onChange={(result) => {
                                    this.setState({
                                        newPictureUrl: result.target.value
                                    })
                                }} />
                        </Form.Item>
                    </Form>
                </Modal>
            </Drawer>
        )
    }
}

export default withRouter(MenuDrawer);