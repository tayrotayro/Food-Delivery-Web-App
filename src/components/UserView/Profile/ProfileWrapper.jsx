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
            fullNameError: "",
            emailError: "",
            phoneError: "",
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
        console.log(userId);
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
        console.log(userId);
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
                console.log(response);
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
                    <Avatar size={80} src={"https://pbs.twimg.com/profile_images/1062846911365832705/vEcBrrYv_400x400.jpg"}></Avatar>
                </div>
                <Divider />
                <div className="user-profile-info user-profile-section">
                    <h3><Icon className="user-profile-title-icon" type="profile" /> Personal Info</h3>
                    {
                        this.state.isEditingPersonalInfo
                            ?
                            <div className="hover-right-button">
                                <a onClick={() => this.setState({ isEditingPersonalInfo: false })}>Cancel</a>
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
                                    validateStatus={this.state.fullNameError === "" ? null : "error"}
                                    help={this.state.fullNameError === "" ? null : this.state.fullNameError}
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
                                    validateStatus={this.state.emailError === "" ? null : "error"}
                                    help={this.state.emailError === "" ? null : this.state.emailError}
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
                                    validateStatus={this.state.phoneError === "" ? null : "error"}
                                    help={this.state.phoneError === "" ? null : this.state.phoneError}
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
                                    <Button size="large" onClick={this.handleUpdateInfo} type="primary" htmlType="submit">Save</Button>
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