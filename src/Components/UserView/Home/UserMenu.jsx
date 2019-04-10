import React, { Component } from 'react';
import { withRouter } from 'react-router';

class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="user-menu">
            <h1>Jim's Menu</h1>
            </div>
        )
    }
}

export default withRouter(UserMenu);