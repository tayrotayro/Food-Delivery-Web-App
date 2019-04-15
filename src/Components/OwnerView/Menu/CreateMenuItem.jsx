import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Modal, Button, Form, Input } from 'antd';

class OwnerCreateMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const confirm = Modal.confirm;

        
        function showConfirm() {
            confirm({
              title: 'Do you want to delete these items?',
              content: <Form.Item><Input /></Form.Item>,
              onOk() {
                return new Promise((resolve, reject) => {
                  setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
              },
              onCancel() {},
            });
          }

        return(
            <Button onClick={showConfirm} 
            type="primary">
            Create Menu Item
          </Button>
        )
    }
}

export default withRouter(OwnerCreateMenuItem);