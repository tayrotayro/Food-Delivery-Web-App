import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Avatar, Divider, Button, Icon, Form, Input } from 'antd';
import SecurityDrawer from './Drawers/SecurityDrawer';
import AddressDrawer from './Drawers/AddressDrawer';
import PaymentDrawer from './Drawers/PaymentDrawer';
import './ProfileWrapper.css';

class ProfileWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditingPersonalInfo: false,
            fullName: "",
            email: "",
            phone: "",
            fullNameError: "",
            emailError: "",
            phoneError: "",
            openSecurityDrawer: false,
            openAddressDrawer: false,
            openPaymentDrawer: false
        }
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
        return (
            <div className="user-profile-wrapper">
                <div className="user-profile-header">
                    <div>
                        <h1>Hi Tam</h1>
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
                                        size="large" type="password"
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
                                        size="large" type="password"
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
                                    <Button size="large" onClick={this.onSubmit} type="primary" htmlType="submit">Save</Button>
                                </div>
                            </Form>
                            :
                            <div>
                                <div>Tam Nguyen</div>
                                <div>tam.nguyen9779@gmail.com</div>
                                <div>(662) 371 - 5507</div>
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
                    <a>Become a driver partner</a>
                    <br />
                    <a>Become a restaurant partner</a>
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
                    disabled
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