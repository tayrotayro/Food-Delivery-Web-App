import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Avatar, Divider, Button, Icon, Form, Input, message } from 'antd';
import Spinner from '../../Spinner';
import SecurityDrawer from './Drawers/SecurityDrawer';
import AddressDrawer from './Drawers/AddressDrawer';
import PaymentDrawer from './Drawers/PaymentDrawer';
import './ProfileWrapper.css';
import Axios from 'axios';

class ProfileWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingInfo: true,
            loadingRoles: true,
            isDriver: false,
            isOwner: false,
            isEditingPersonalInfo: false,
            fullName: "",
            email: "",
            phone: "",
            openSecurityDrawer: false,
            openAddressDrawer: false,
            openPaymentDrawer: false,
            userInfo: []
        }
    }

    componentDidMount() {
        this.getUserInfo();
        this.getUserRoles();
    }

    getUserInfo = () => {
        const userId = localStorage.getItem('loggedInUserId');
        Axios.get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                console.log(response.data.data);
                this.setState({
                    loadingInfo: false,
                    fullName: response.data.data.name,
                    email: response.data.data.email,
                    phone: response.data.data.phone
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    getUserRoles = () => {
        Axios.get(`http://localhost:5000/api/user-roles/${localStorage.getItem('loggedInUserId')}`)
            .then(response => {
                const availableRoles = response.data.data;
                const isDriver = availableRoles.indexOf(2) > -1;
                const isOwner = availableRoles.indexOf(3) > -1;

                this.setState({
                    loadingRoles: false,
                    isDriver,
                    isOwner
                })
            })
            .catch(err => console.log(err))
    }

    handleBecomeOwner = () => {
        const userId = localStorage.getItem('loggedInUserId');
        Axios.post(`http://localhost:5000/api/owner/${userId}`)
            .then(response => {
                console.log(response);
                this.props.history.push('/owner-home');
                message.success("You are now a Restaurant Owner! Welcome!");
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleBecomeDriver = () => {
        const userId = localStorage.getItem('loggedInUserId');
        Axios.post(`http://localhost:5000/api/driver/${userId}`)
            .then(response => {
                console.log(response);
                this.props.history.push('/driver-home');
                message.success("You are now a Driver! Welcome!");
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleUpdateInfo = () => {
        const userId = localStorage.getItem('loggedInUserId');
        Axios.put(`http://localhost:5000/api/user/${userId}`, {
            name: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone
        })
            .then(response => {
                this.setState({
                    isEditingPersonalInfo: false
                })
                message.success("Profile Information Updated!");
            })
            .catch(err => {
                console.log(err);
            })
    }


    closeSecurityDrawer = () => {
        this.setState({ openSecurityDrawer: false })
    }

    closeAddressDrawer = () => {
        this.setState({ openAddressDrawer: false })
    }

    closePaymentDrawer = () => {
        this.setState({ openPaymentDrawer: false })
    }

    handleLogOut = () => {
        localStorage.clear();
        this.props.history.push('/authentication');
    }

    render() {
        if (this.state.loadingInfo || this.state.loadingRoles) {
            return <Spinner />
        }

        return (
            <div className="user-profile-wrapper">
                <div className="user-profile-header">
                    <div>
                        <h1>Hi {this.state.fullName}</h1>
                        <a>Update profile image</a>
                    </div>
                    <Avatar size={80} src={"data:image/png;base64,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"}></Avatar>
                </div>
                <Divider />
                <div className="user-profile-info user-profile-section">
                    <h3><Icon className="user-profile-title-icon" type="profile" /> Personal Info</h3>
                    {
                        this.state.isEditingPersonalInfo
                            ?
                            <div className="hover-right-button">
                                <a onClick={() => {
                                    this.setState({ isEditingPersonalInfo: false });
                                    this.getUserInfo();
                                }
                                }>Cancel</a>
                            </div>
                            :
                            <div className="hover-right-button">
                                <Icon type="form" />&nbsp;
                                <a onClick={() => this.setState({ isEditingPersonalInfo: true })}>Edit</a>
                            </div>
                    }
                    {
                        this.state.isEditingPersonalInfo
                            ?
                            <Form>
                                <Form.Item
                                    label="Full name"
                                    colon={false}
                                    validateStatus={this.state.fullName === "" ? "error" : null}
                                    help={this.state.fullName === "" ? "Full name is required" : null}
                                >
                                    <Input
                                        autoFocus size="large"
                                        value={this.state.fullName}
                                        onChange={(target) => {
                                            // this.clearErrors();
                                            this.setState({ fullName: target.target.value })
                                        }} />
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    colon={false}
                                    validateStatus={this.state.email === "" ? "error" : null}
                                    help={this.state.email === "" ? "Email is required" : null}
                                >
                                    <Input
                                        size="large" type="email"
                                        value={this.state.email}
                                        onChange={(target) => {
                                            // this.clearErrors();
                                            this.setState({ email: target.target.value })
                                        }} />
                                </Form.Item>
                                <Form.Item
                                    label="Phone number"
                                    colon={false}
                                    validateStatus={this.state.phone === "" ? "error" : null}
                                    help={this.state.phone === "" ? "Phone number is required" : null}
                                >
                                    <Input
                                        size="large"
                                        value={this.state.phone}
                                        onChange={(target) => {
                                            // this.clearErrors();
                                            this.setState({ phone: target.target.value })
                                        }} />
                                </Form.Item>
                                <div
                                    style={{
                                        width: '100%',
                                        paddingTop: '16px',
                                        textAlign: 'right'
                                    }}
                                >
                                    <Button
                                        size="large" type="primary" htmlType="submit"
                                        onClick={this.handleUpdateInfo}
                                        disabled={this.state.fullName === "" || this.state.email === "" || this.state.phone === ""}
                                    >Save</Button>
                                </div>
                            </Form>
                            :
                            <div>
                                <div>{this.state.fullName}</div>
                                <div>{this.state.email}</div>
                                <div>{this.state.phone}</div>
                            </div>
                    }
                </div>
                <Divider />
                <div className="user-profile-clickable">
                    <h3><Icon className="user-profile-title-icon" type="lock" /> Change password</h3>
                    <Icon className="user-profile-clickable-icon" type="right" onClick={() => this.setState({ openSecurityDrawer: true })} />
                </div>
                <Divider />
                <div className="user-profile-clickable">
                    <h3><Icon className="user-profile-title-icon" type="home" /> Addresses</h3>
                    <Icon className="user-profile-clickable-icon" type="right" onClick={() => this.setState({ openAddressDrawer: true })} />
                </div>
                <Divider />
                <div className="user-profile-clickable">
                    <h3><Icon className="user-profile-title-icon" type="credit-card" /> Payments</h3>
                    <Icon className="user-profile-clickable-icon" type="right" onClick={() => this.setState({ openPaymentDrawer: true })} />
                </div>
                <Divider />
                <div className="user-profile-section">
                    <h3><Icon className="user-profile-title-icon" type="usergroup-add" /> Partnership</h3>
                    {
                        !this.state.isDriver
                        &&
                        <div>
                            <a onClick={this.handleBecomeDriver}>Become a driver partner</a>
                            <br />
                        </div>
                    }
                    {
                        !this.state.isOwner
                        &&
                        <a onClick={this.handleBecomeOwner}>Become a restaurant partner</a>
                    }
                    {
                        (this.state.isDriver && this.state.isOwner)
                        &&
                        <div>You are currently a driver & a restaurant partner.</div>
                    }
                </div>
                <Divider />
                <div className="user-profile-section">
                    <h3><Icon className="user-profile-title-icon" type="dollar" /> Referrals & Credits</h3>
                    <a>Refer a driver</a>
                    <br />
                    <a>Invite friends</a>
                </div>
                <Divider />
                <Button
                    disabled={this.state.isDriver || this.state.isOwner ? false : true}
                    className="log-out-button"
                    size="large"
                    type="primary"
                    onClick={() => this.props.history.push('/view-picker')}
                >Switch role</Button>
                <Button
                    className="log-out-button"
                    size="large"
                    type="danger"
                    onClick={this.handleLogOut}
                >Log out</Button>
                {/* Drawers */}
                <SecurityDrawer isOpen={this.state.openSecurityDrawer} onClose={this.closeSecurityDrawer} />
                <AddressDrawer isOpen={this.state.openAddressDrawer} onClose={this.closeAddressDrawer} />
                <PaymentDrawer isOpen={this.state.openPaymentDrawer} onClose={this.closePaymentDrawer} />
            </div>
        )
    }
}

export default withRouter(ProfileWrapper);