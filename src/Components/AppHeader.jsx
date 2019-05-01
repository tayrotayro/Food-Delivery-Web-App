import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Avatar } from 'antd';
import '../style/AppHeader.css';

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="app-header-wrapper">
                <div className="app-header-logo">Delivrd</div>
                <Avatar className="app-header-avatar" size="large">TN</Avatar>
            </div>
        )
    }
}

export default withRouter(AppHeader);