import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Modal, Button, Form, Input } from 'antd';

class CreateMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
            name: "",
            description: "",
            price: 0,
            pictureUrl: "",
            menuId: "",
        }
    }
// menuId = this.props.

//     createitem = () => {
//         axios.post('http://localhost:5000/api/menu-item')
//             .then(response => {
//                 console.log(response);
//                 this.setState({
//                     menuId: this.props.response.data.data.menuId
//                 })
//             })
//             .catch(err => {
//                 console.log(err);
//             })

//     }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible, loading } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Add Menu Item
                </Button>
                <Modal
                    visible={visible}
                    maskClosable={false}
                    title="Add Menu Item"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Create Menu Item
            </Button>,
                    ]}
                >
                    <Form>
                        <Form.Item>
                            <Input placeholder="Name" required
                                style={{ width: '300px' }}
                                onChange={(result) => {
                                    this.setState({
                                        name: result.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Description" required
                                style={{ width: '300px' }}
                                onChange={(result) => {
                                    this.setState({
                                        description: result.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Price" required
                                style={{ width: '300px' }}
                                onChange={(result) => {
                                    this.setState({
                                        price: result.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Picture Url" required
                                style={{ width: '300px' }}
                                onChange={(result) => {
                                    this.setState({
                                        pictureUrl: result.target.value
                                    })
                                }} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default withRouter(CreateMenuItem);
