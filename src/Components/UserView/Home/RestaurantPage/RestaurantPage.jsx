import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { PageHeader } from 'antd';

class RestaurantPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <PageHeader
                    title="Pick Thai (1001 Jackson Ave)"
                // onBack={() => this.props.onClose()}
                />
            </div>
        )
    }
}

export default withRouter(RestaurantPage)