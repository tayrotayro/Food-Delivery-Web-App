import React, { Component } from 'react';
import { Divider, Icon, Row, Col } from 'antd';
import '../style/AppFooter.css';

class AppFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Row className="app-footer-wrapper">
                <Col xs={0} sm={0} md={0} lg={1} xl={2}></Col>
                <Col xs={24} sm={24} md={24} lg={22} xl={20}>
                    {/* <Divider />
                    <p>About</p>
                    <p>Become a Driver Partner</p>
                    <p>Become a Restaurant Partner</p>
                    <p>Help</p>
                    <p>FAGs</p>
                    <p>Request Features</p> */}
                    <Divider />
                    <div className="app-footer-logo">Delivrd</div>
                    <p>Built with <Icon type="heart" theme="filled" /> & <Icon type="coffee" /></p>
                    <small>© 2019 Delivrd Inc. | All rights reserved.</small>
                    <br />
                    <small>Privacy</small>
                    <br />
                    <small>Terms</small>
                </Col>
                <Col xs={0} sm={0} md={0} lg={1} xl={2}></Col>
            </Row>
        )
    }
}

export default AppFooter;