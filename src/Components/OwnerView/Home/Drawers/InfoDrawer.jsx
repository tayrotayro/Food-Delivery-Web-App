import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, PageHeader, Form, Input, Select, Button } from 'antd';
import './InfoDrawer.css';

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
        // Fetch restaurant data
    }

    render() {
        const Option = Select.Option;

        return (
            <Drawer
                className="restaurant-info-drawer"
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
                <Form>
                    <Form.Item
                        label="Restaurant Name"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input required
                            size="large"
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
                    <Button type="primary" size="large" style={{ width: '100%', margin: '24px 0px' }}>Save</Button>
                </Form>
            </Drawer>
        )
    }
}

export default withRouter(InfoDrawer);