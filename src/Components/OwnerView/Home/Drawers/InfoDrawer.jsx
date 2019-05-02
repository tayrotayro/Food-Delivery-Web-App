import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, PageHeader, Form, Input, Select, Button, message } from 'antd';
import './InfoDrawer.css';
import Axios from 'axios';

class InfoDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            phone: "",
            description: "",
            priceRange: null,
            pictureUrl: ""
        }
    }


    componentDidMount() {
        const restaurant = this.props.restaurant;
        console.log(restaurant);
        this.setState({
            name: restaurant.name,
            address: restaurant.address,
            phone: restaurant.phone,
            description: restaurant.description,
            priceRange: restaurant.priceRange,
            pictureUrl: restaurant.pictureURL
        })
    }

    handleUpdateRestaurant = () => {
        const restaurant = this.props.restaurant;
        const restaurantId = restaurant._id;
        console.log(restaurantId);
        Axios.put(`http://localhost:5000/api/restaurant-info/${restaurantId}`, {
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            description: this.state.description,
            pictureURL: this.state.pictureUrl
        })
            .then(() => {
                message.success('Restaurant Information Successfully Updated')
                this.props.refetch();
                this.props.onClose();
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const Option = Select.Option;

        return (
            <Drawer
                className="restaurant-info-drawer"
                title={<PageHeader
                    title={`${this.state.name.toUpperCase()} - INFORMATION`}
                    onBack={() => this.props.onClose()}
                />}
                placement="right"
                closable={false}
                onClose={this.props.onClose}
                visible={this.props.isOpen}
                destroyOnClose
            >
                <Form>
                    <Form.Item
                        label="Restaurant Name"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input required
                            size="large"
                            defaultValue={this.state.name}
                            onChange={(result) => {
                                this.setState({
                                    name: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input required
                            defaultValue={this.state.phone}
                            size="large"
                            onChange={(result) => {
                                this.setState({
                                    phone: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input required
                            defaultValue={this.state.address}
                            size="large"
                            onChange={(result) => {
                                this.setState({
                                    address: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input required
                            size="large"
                            defaultValue={this.state.description}
                            onChange={(result) => {
                                this.setState({
                                    description: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="Picture URL"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input size="large"
                            defaultValue={this.state.pictureUrl}
                            onChange={(result) => {
                                this.setState({
                                    pictureUrl: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="Price Range"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Select defaultValue="$" size="large" onChange={(value) => { this.setState({ priceRange: value }) }} required>
                            <Option value={1}>$</Option>
                            <Option value={2}>$$</Option>
                            <Option value={3}>$$$</Option>
                            <Option value={4}>$$$$</Option>
                        </Select>
                    </Form.Item>
                    <Button onClick={this.handleUpdateRestaurant} type="primary" size="large" style={{ width: '100%', margin: '24px 0px' }}>Save</Button>
                </Form>
            </Drawer>
        )
    }
}

export default withRouter(InfoDrawer);