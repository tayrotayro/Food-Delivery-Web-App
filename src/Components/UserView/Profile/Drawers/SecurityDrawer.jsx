import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, PageHeader, Form, Input, Button, message } from 'antd';
import './SecurityDrawer.css';

class SecurityDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
            oldPasswordError: "",
            newPasswordError: "",
            confirmPasswordError: ""
        }
    }

    onSubmit = () => {
        if (this.state.oldPassword === "" || this.state.newPassword === "" || this.state.confirmPassword === "") {
            this.setState({
                oldPasswordError: "Please fill out all fields",
                newPasswordError: "Please fill out all fields",
                confirmPasswordError: "Please fill out all fields"
            })
        } else if (this.state.newPassword !== this.state.confirmPassword) {
            this.setState({
                confirmPasswordError: "Your confirm password doesn't match"
            })
        } else {
            message.success("You have successfully changed your password", 7);
            this.props.onClose();
        }
    }

    clearErrors = () => {
        this.setState({
            oldPasswordError: "",
            newPasswordError: "",
            confirmPasswordError: ""
        })
    }

    render() {
        return (
            <Drawer
                className="security-drawer"
                title={<PageHeader
                    title="CHANGE PASSWORD"
                    onBack={this.props.onClose}
                />}
                placement="right"
                closable={false}
                onClose={this.props.onClose}
                visible={this.props.isOpen}
                destroyOnClose
            >
                <Form>
                    <Form.Item
                        label="Current password"
                        colon={false}
                        validateStatus={this.state.oldPasswordError === "" ? null : "error"}
                        help={this.state.oldPasswordError === "" ? null : this.state.oldPasswordError}
                    >
                        <Input
                            autoFocus size="large" type="password"
                            value={this.state.oldPassword}
                            onChange={(target) => {
                                this.clearErrors();
                                this.setState({ oldPassword: target.target.value })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="New password"
                        colon={false}
                        validateStatus={this.state.newPasswordError === "" ? null : "error"}
                        help={this.state.newPasswordError === "" ? null : this.state.newPasswordError}
                    >
                        <Input
                            size="large" type="password"
                            value={this.state.newPassword}
                            onChange={(target) => {
                                this.clearErrors();
                                this.setState({ newPassword: target.target.value })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="Confirm password"
                        colon={false}
                        validateStatus={this.state.confirmPasswordError === "" ? null : "error"}
                        help={this.state.confirmPasswordError === "" ? null : this.state.confirmPasswordError}
                    >
                        <Input
                            size="large" type="password"
                            value={this.state.confirmPassword}
                            onChange={(target) => {
                                this.clearErrors();
                                this.setState({ confirmPassword: target.target.value })
                            }} />
                    </Form.Item>
                    <div
                        style={{
                            width: '100%',
                            padding: '8px 0px',
                            textAlign: 'right'
                        }}
                    >
                        {/* <Button size="large" onClick={this.props.onClose} style={{ marginRight: 16 }}>Cancel</Button> */}
                        <Button size="large" onClick={this.onSubmit} type="primary" htmlType="submit">Update password</Button>
                    </div>
                </Form>
            </Drawer>
        )
    }
}

export default withRouter(SecurityDrawer);