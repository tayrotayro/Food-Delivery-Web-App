import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, PageHeader, Card, Row, Col, Modal, Form, Input, Button, Icon } from 'antd';
import './MenuDrawer.css';
import Axios from 'axios';

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
            newPictureUrl: "",
            menuItems:[]
        }
    }

    componentDidMount() {
        this.fetchMenuItems();
        // Axios.get(`http://localhost:5000/api/menu-item/${this.props.menuId}`)
        //     .then(response => {
        //         this.setState({
        //             menuItems: response.data.data.items
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    fetchMenuItems = () => {
        const menuId = this.props.menuId;
        Axios.get(`http://localhost:5000/api/menu-item/${menuId}`)
            .then(response => {
                this.setState({
                    menuItems: response.data.data.items
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleAddMenuItem = () => {
        Axios.post(`http://localhost:5000/api/menu-item`, {
            name: this.state.newName,
            description: this.state.newDescription,
            basePrice: this.state.newPrice,
            pictureUrl: this.state.newPictureUrl,
            menuId: this.props.menuId
        })
            .then(response => {
                this.fetchMenuItems();
                this.setState({
                    openAddModal: false
                })

            })
            .catch(err => {
                console.log(err);
            })
    }

    handleEditMenuItem = () => {
        const menuId = this.props.menuId;
        Axios.put(`http://localhost:5000/api/menu-item/${menuId}`,{
            name: this.state.editName,
            description: this.state.editDescription,
            basePrice: this.state.editPrice,
            pictureUrl: this.state.editPictureUrl

        })
        .then(response => {
            this.fetchMenuItems();
            this.setState({
                openEditModal: false
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleDeleteItem = (menuItemId) => {
        Axios.put(`http://localhost:5000/api/delete-item/${menuItemId}`, {
            menuId: this.props.menuId
        })
        .then(response => {
            this.fetchMenuItems();
            console.log(response);

        })
        .catch(err=> {
            console.log(err);
        })
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
                        this.state.menuItems.map(menuItem => {
                            return (
                                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                    <Card
                                        className="menu-item"
                                        title={menuItem.name}
                                        extra={<a href="#" onClick={() => this.setState({ openEditModal: true })}>Edit</a>}
                                    >
                                        <p>{menuItem.description}</p>
                                        <h2>{menuItem.basePrice}</h2>
                                        <span className="delete-menu-item-button">
                                            <Icon onClick={() => this.handleDeleteItem(menuItem._id)} type="delete" />
                                        </span>
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
                    maskClosable={false}
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
                                //defaultValue={this.state.menuItems.description}
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
                    maskClosable={false}
                    visible={this.state.openAddModal}
                    okText="Add"
                    onOk={this.handleAddMenuItem}
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