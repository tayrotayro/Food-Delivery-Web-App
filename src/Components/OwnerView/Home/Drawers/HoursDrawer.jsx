import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, PageHeader, Row, Col } from 'antd';
import displayHour from '../../../../utils/displayHour';
import './HoursDrawer.css';

class HoursDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        const restaurant = this.props.restaurant;
        console.log(restaurant);
        this.setState({
            name: restaurant.name,
        })
    }

    render() {
        console.log(this.props.hours);
        return (
            <Drawer
                className="restaurant-hours-drawer"
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
                <Row>
                    <Col xs={9}></Col>
                    <Col xs={8}><h2>Open</h2></Col>
                    <Col xs={7}><h2>Close</h2></Col>
                </Row>
                <Row>
                    <Col xs={9}><h4>Monday</h4></Col>
                    <Col xs={8}>{displayHour(this.props.hours.mon.openTime)}</Col>
                    <Col xs={7}>{displayHour(this.props.hours.mon.closeTime)}</Col>
                </Row>
                <Row>
                    <Col xs={9}><h4>Tuesday</h4></Col>
                    <Col xs={8}>{displayHour(this.props.hours.tue.openTime)}</Col>
                    <Col xs={7}>{displayHour(this.props.hours.tue.closeTime)}</Col>
                </Row>
                <Row>
                    <Col xs={9}><h4>Wednesday</h4></Col>
                    <Col xs={8}>{displayHour(this.props.hours.wed.openTime)}</Col>
                    <Col xs={7}>{displayHour(this.props.hours.wed.closeTime)}</Col>
                </Row>
                <Row>
                    <Col xs={9}><h4>Thursday</h4></Col>
                    <Col xs={8}>{displayHour(this.props.hours.thu.openTime)}</Col>
                    <Col xs={7}>{displayHour(this.props.hours.thu.closeTime)}</Col>
                </Row>
                <Row>
                    <Col xs={9}><h4>Friday</h4></Col>
                    <Col xs={8}>{displayHour(this.props.hours.fri.openTime)}</Col>
                    <Col xs={7}>{displayHour(this.props.hours.fri.closeTime)}</Col>
                </Row>
                <Row>
                    <Col xs={9}><h4>Saturday</h4></Col>
                    <Col xs={8}>{displayHour(this.props.hours.sat.openTime)}</Col>
                    <Col xs={7}>{displayHour(this.props.hours.sat.closeTime)}</Col>
                </Row>
                <Row>
                    <Col xs={9}><h4>Sunday</h4></Col>
                    <Col xs={8}>{displayHour(this.props.hours.sun.openTime)}</Col>
                    <Col xs={7}>{displayHour(this.props.hours.sun.closeTime)}</Col>
                </Row>
            </Drawer>
        )
    }
}

export default withRouter(HoursDrawer);