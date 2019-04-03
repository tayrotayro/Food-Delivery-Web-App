import React, { Component } from 'react';
import { Form, Input, Divider, Select, Button } from 'antd';
import { withRouter } from 'react-router';
import './style.css';

class OwnerProfileCreateRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Modal values
            name: "",
            address: "",
            phone: "",
            description: "",
            hours: "",
            pictureURL: "",
            priceRange: ""
        }
    }

    navigateBack = () => {
        this.props.history.push('/owner-home');
    }

    render() {
        const Option = Select.Option;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        return (
            <div className="create-restaurant">
                <h1>Create Restaurant</h1>
                <Form className="create-form">
                    <Form.Item
                        style={{ padding: '10px' }}>
                        <Input placeholder="Name" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    name: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ padding: '10px' }}>
                        <Input placeholder="Phone Number" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    phone: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ padding: '10px' }}>
                        <Input placeholder="Address" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    address: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ padding: '10px' }}>
                        <Input placeholder="Description" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    description: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Select defaultValue="$" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="one">$</Option>
                        <Option value="two">$$</Option>
                        <Option value="three">$$$</Option>
                        <Option value="four">$$$$</Option>
                    </Select>
                    <div className="create-button-submit">
                        <Button type="primary" size="large"
                            onClick={this.submit}
                        >Create Restaurant</Button>
                    </div>
                    <div className="create-button-cancel" >
                        <Button type="secondary" size="large"
                            onClick={this.navigateBack}
                        >Cancel</Button>
                    </div>
                </Form>
                <Divider />
            </div>
        );
    }
}


export default withRouter(OwnerProfileCreateRestaurant);