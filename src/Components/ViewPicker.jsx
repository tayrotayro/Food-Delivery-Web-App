import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { message, Row, Col } from 'antd';
import Spinner from './Spinner';
import axios from 'axios';
import '../style/ViewPicker.css';

class ViewPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            availableRoles: [],
            isDriver: false,
            isOwner: false
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/user-roles/${localStorage.getItem('loggedInUserId')}`)
            .then(response => {
                const availableRoles = response.data.data;
                const isDriver = availableRoles.indexOf(2) > -1;
                const isOwner = availableRoles.indexOf(3) > -1;

                this.setState({
                    loading: false,
                    availableRoles,
                    isDriver,
                    isOwner
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        // Redirect to sign in page if not signed in
        if (!localStorage.getItem('loggedInUserId')) {
            message.error('You have to sign in first to access this page.', 5);
            return <Redirect to="/authentication" />
        }

        // Show spinner while data is being fetched
        if (this.state.loading) {
            return <Spinner />
        }

        // Redirect to the user home page is the only available role is 'User'
        if (!this.state.isDriver && !this.state.isOwner) {
            return <Redirect to="/" />
        }

        return <div className="picker-wrapper">
            {
                (this.state.isDriver && this.state.isOwner)
                &&
                <Row className="picker-row">
                    <Col
                        onClick={() => this.props.history.push('/')}
                        className="user-background one-third picker-option"
                        xs={24} sm={24} md={24} lg={8} xl={8}
                    >
                        <div className="picker-text">CUSTOMER MODE</div>
                    </Col>
                    <Col
                        onClick={() => this.props.history.push('/driver-home')}
                        className="driver-background one-third picker-option"
                        xs={24} sm={24} md={24} lg={8} xl={8}>
                        <div className="picker-text">DRIVER MODE</div>
                    </Col>
                    <Col
                        onClick={() => this.props.history.push('/owner-home')}
                        className="owner-background one-third picker-option"
                        xs={24} sm={24} md={24} lg={8} xl={8}
                    >
                        <div className="picker-text">OWNER MODE</div>
                    </Col>
                </Row>
            }
            {
                (this.state.isDriver && !this.state.isOwner)
                &&
                <Row className="picker-row">
                    <Col
                        onClick={() => this.props.history.push('/')}
                        className="user-background one-half picker-option"
                        xs={24} sm={24} md={12} lg={12} xl={12}
                    >
                        <div className="picker-text">CUSTOMER MODE</div>
                    </Col>
                    <Col
                        onClick={() => this.props.history.push('/driver-home')}
                        className="driver-background one-half picker-option"
                        xs={24} sm={24} md={12} lg={12} xl={12}
                    >
                        <div className="picker-text">DRIVER MODE</div>
                    </Col>
                </Row>
            }
            {
                (!this.state.isDriver && this.state.isOwner)
                &&
                <Row className="picker-row">
                    <Col
                        onClick={() => this.props.history.push('/')}
                        className="user-background one-half picker-option"
                        xs={24} sm={24} md={12} lg={12} xl={12}
                    >
                        <div className="picker-text">CUSTOMER MODE</div>
                    </Col>
                    <Col
                        onClick={() => this.props.history.push('/owner-home')}
                        className="owner-background one-half picker-option"
                        xs={24} sm={24} md={12} lg={12} xl={12}
                    >
                        <div className="picker-text">OWNER MODE</div>
                    </Col>
                </Row>
            }
        </div>
    }
}

export default ViewPicker;