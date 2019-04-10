import React, { Component } from 'react';
import { withRouter } from 'react-router';

class OwnerCreateMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <h1>Create Menu Item</h1>
        )
    }
}

export default withRouter(OwnerCreateMenuItem);