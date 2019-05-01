import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Button, Form, Input, Divider, Select } from 'antd';
import './style.css';

class DriverProfileWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleLogout = async event => {
        localStorage.clear();
        this.props.history.push("/authentication");
      }
      

    navigateToUser = () => {
        this.props.history.push('/');
    }

    navigateToCreateRestaurant = () => {
        this.props.history.push('/owner-create-restaurant')
    }

    render() {
        return (

            <div className="profile-wrapper">
                <h1>Driver Profile</h1>
                <Form className="create-form">
                    <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Name" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    name: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Phone Number" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    phone: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Address" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    address: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Restaurnat Description" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    description: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Picture URL"
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    pictureURL: result.target.value
                                })
                            }} />
                    </Form.Item>
                    </Form>
                    <div className="profile-change-view"
                        style={{ padding: "35px", paddingTop: "15px", paddingBottom: "25px" }}>
                        <Button type="secondary" size="large" block onClick={this.navigateToUser}>Exit Driver View </Button>
                    </div>
                        <Button type="danger"  size="large" block onClick={this.handleLogout}>Log Out</Button>

            </div>

                )
            }
        }
        
        
        
export default withRouter(DriverProfileWrapper);