import React, { Component } from 'react';
import { Form, Input, Divider, Select, Button, TimePicker, message, Row, Col } from 'antd';
import { withRouter } from 'react-router';
import './style.css';
import FormItem from 'antd/lib/form/FormItem';
import moment from 'moment';
import axios from 'axios';

class OwnerProfileCreateRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            phone: "",
            description: "",
            priceRange: 1,
            pictureURL: "",
            monOpenHour: null,
            monCloseHour: null,
            tueOpenHour: null,
            tueCloseHour: null,
            wedOpenHour: null,
            wedCloseHour: null,
            thuOpenHour: null,
            thuCloseHour: null,
            friOpenHour: null,
            friCloseHour: null,
            satOpenHour: null,
            satCloseHour: null,
            sunOpenHour: null,
            sunCloseHour: null
        }
    }

    submit = (event) => {
        console.log("Submitted");
        const ownerId = localStorage.getItem('loggedInUserId');
        event.preventDefault();
        axios.post(`http://localhost:5000/api/restaurant/${ownerId}`, {
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            description: this.state.description,
            priceRange: this.state.priceRange,
            pictureURL: this.state.pictureURL,
            monHour: [this.state.monOpenHour, this.state.monCloseHour],
            tueHour: [this.state.tueOpenHour, this.state.tueCloseHour],
            wedHour: [this.state.wedOpenHour, this.state.wedCloseHour],
            thuHour: [this.state.thuOpenHour, this.state.thuCloseHour],
            friHour: [this.state.friOpenHour, this.state.friCloseHour],
            satHour: [this.state.satOpenHour, this.state.satCloseHour],
            sunHour: [this.state.sunOpenHour, this.state.sunCloseHour],
        })
            .then(response => {
                console.log(response);
                message.success(response.data.message);
                this.props.refetch();
                this.props.closeDrawer();
            })
            .catch(error => {
                console.log(error);
            });
    }



    navigateToOwnerProfile = () => {
        this.props.history.push('/owner-profile');
    }

    // navigateToCreateMenuItem = () => {
    //     this.props.history.push('/owner-create-menu-item');
    // }

    convertTimeValue = (time) => {
        const result = moment(time).hour() + (moment(time).minute() / 60);
        return result;
    }

    render() {
        const Option = Select.Option;
        const timePickerFormat = 'hh:mm a';

        return (
            <div className="create-restaurant">
                <Form className="create-form">
                    <h2>Basic Information</h2>
                    <Form.Item
                        label="Restaurant Name"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input required
                            size="large"
                            onChange={(result) => {
                                this.setState({
                                    name: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input required
                            size="large"
                            onChange={(result) => {
                                this.setState({
                                    phone: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input required
                            size="large"
                            onChange={(result) => {
                                this.setState({
                                    address: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input required
                            size="large"
                            onChange={(result) => {
                                this.setState({
                                    description: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        label="Picture URL"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Input size="large"
                            onChange={(result) => {
                                this.setState({
                                    pictureURL: result.target.value
                                })
                            }} />
                    </Form.Item>
                    {/* <Form.Item
                        style={{ margin: '8px 0px' }}>
                        <Input placeholder="Menu Description" 
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    menuDescription: result.target.value
                                })
                            }} />
                    </Form.Item> */}
                    <Form.Item
                        label="Price Range"
                        colon={false}
                        style={{ margin: '8px 0px' }}>
                        <Select defaultValue="$" size="large" onChange={(value) => { this.setState({ priceRange: value }) }} required>
                            <Option value={1}>$</Option>
                            <Option value={2}>$$</Option>
                            <Option value={3}>$$$</Option>
                            <Option value={4}>$$$$</Option>
                        </Select>
                    </Form.Item>

                    <Divider />
                    <h2>Restaurant Hours</h2>
                    <FormItem
                        label="Monday Hours"
                        colon={false}
                        style={{ margin: '8px 0px' }}
                    >
                        <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ monOpenHour: this.convertTimeValue(time) });
                                    }}
                                    required
                                />
                            </Col>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ monCloseHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem
                        label="Tuesday Hours"
                        colon={false}
                        style={{ margin: '8px 0px' }}
                    >
                        <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ tueOpenHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ tueCloseHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem
                        label="Wednesday Hours"
                        colon={false}
                        style={{ margin: '8px 0px' }}
                    >
                        <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ wedOpenHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ wedCloseHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem
                        label="Thursday Hours"
                        colon={false}
                        style={{ margin: '8px 0px' }}
                    >
                        <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ thuOpenHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ thuCloseHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem
                        label="Friday Hours"
                        colon={false}
                        style={{ margin: '8px 0px' }}
                    >
                        <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ friOpenHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ friCloseHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem
                        label="Saturday Hours"
                        colon={false}
                        style={{ margin: '8px 0px' }}
                    >
                        <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ satOpenHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ satCloseHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem
                        label="Sunday Hours"
                        colon={false}
                        style={{ margin: '8px 0px' }}
                    >
                        <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }}>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ sunOpenHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                            <Col xs={12}>
                                <TimePicker
                                    use12Hours
                                    size="large"
                                    style={{ width: '100%' }}
                                    format={timePickerFormat}
                                    defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                    minuteStep={30}
                                    onChange={(time) => {
                                        this.setState({ sunCloseHour: this.convertTimeValue(time) });
                                    }}
                                    required />
                            </Col>
                        </Row>
                    </FormItem>


                    <div className="create-button-submit">
                        <Button type="primary" size="large" htmlType="submit"
                            style={{ width: '100%' }}
                            onClick={this.submit}
                        >Create Restaurant</Button>
                    </div>
                    {/* <div className="create-button-cancel" >
                        <Button type="secondary" size="large"
                            style={{ marginRight: "16px", marginBottom: "20px" }}
                            onClick={this.navigateToOwnerProfile}
                        >Cancel</Button>
                    </div> */}
                </Form>
            </div>
        );
    }
}


export default withRouter(OwnerProfileCreateRestaurant);