import React, { Component } from 'react';
import { Form, Input, Divider, Select, Button, TimePicker, message } from 'antd';
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
                this.navigateToCreateMenuItem();
            })
            .catch(error => {
                console.log(error);
            });
    }



    navigateToOwnerProfile = () => {
        this.props.history.push('/owner-profile');
    }

    navigateToCreateMenuItem = () => {
        this.props.history.push('/owner-create-menu-item');
    }

    convertTimeValue = (time) => {
        const result = moment(time).hour() + (moment(time).minute() / 60);
        return result;
    }

    render() {
        const Option = Select.Option;
        const timePickerFormat = 'hh:mm a';

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        function onChange(time, timeString) {
            console.log(time, timeString);
        }

        return (
            <div className="create-restaurant">
                <h1>Create Restaurant</h1>
                <Form className="create-form">
                    <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Name" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    name: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Phone Number" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    phone: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Address" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    address: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Restaurnat Description" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    description: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Picture URL" 
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    pictureURL: result.target.value
                                })
                            }} />
                    </Form.Item>
                    {/* <Form.Item
                        style={{ margin: '10px' }}>
                        <Input placeholder="Menu Description" 
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    menuDescription: result.target.value
                                })
                            }} />
                    </Form.Item> */}
                    <Select defaultValue="$" style={{ width: 120 }} onChange={(value) => { this.setState({ priceRange: value }) }} required>
                        <Option value={1}>$</Option>
                        <Option value={2}>$$</Option>
                        <Option value={3}>$$$</Option>
                        <Option value={4}>$$$$</Option>
                    </Select>

                    <div className="restaurant-hours" >
                        <h1>Restaurant Hours</h1>
                        <FormItem>
                            <h3>Monday Hours</h3>
                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ monOpenHour: this.convertTimeValue(time) });
                                }}
                                required
                            />

                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ monCloseHour: this.convertTimeValue(time) });
                                }}
                                required />
                        </FormItem>

                        <h3>Tuesday Hours</h3>
                        <FormItem>
                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ tueOpenHour: this.convertTimeValue(time) });
                                }}
                                required />

                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ tueCloseHour: this.convertTimeValue(time) });
                                }}
                                required />
                        </FormItem>

                        <h3>Wednesday Hours</h3>
                        <FormItem style={{ padding: "10px" }}>
                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ wedOpenHour: this.convertTimeValue(time) });
                                }}
                                required />

                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ wedCloseHour: this.convertTimeValue(time) });
                                }}
                                required />
                        </FormItem>

                        <h3>Thursday Hours</h3>
                        <FormItem>
                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ thuOpenHour: this.convertTimeValue(time) });
                                }}
                                required />

                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ thuCloseHour: this.convertTimeValue(time) });
                                }}
                                required />
                        </FormItem>

                        <h3>Friday Hours</h3>
                        <FormItem>
                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ friOpenHour: this.convertTimeValue(time) });
                                }}
                                required />

                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ friCloseHour: this.convertTimeValue(time) });
                                }}
                                required />
                        </FormItem>

                        <h3>Saturday Hours</h3>
                        <FormItem>
                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ satOpenHour: this.convertTimeValue(time) });
                                }}
                                required />

                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ satCloseHour: this.convertTimeValue(time) });
                                }}
                                required />
                        </FormItem>

                        <h3>Sunday Hours</h3>
                        <FormItem>
                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ sunOpenHour: this.convertTimeValue(time) });
                                }}
                                required />

                            <TimePicker style={{ margin: "10px" }}
                                use12Hours
                                format={timePickerFormat}
                                defaultOpenValue={moment("12:00 am", "hh:mm a")}
                                minuteStep={30}
                                onChange={(time) => {
                                    this.setState({ sunCloseHour: this.convertTimeValue(time) });
                                }}
                                required />
                        </FormItem>
                        <Form className="create-form"></Form>
                    </div>


                    <div className="create-button-submit">
                        <Button type="primary" size="large" htmlType="submit"
                            style={{}}
                            onClick={this.submit}
                        >Create Restaurant</Button>
                    </div>
                    <div className="create-button-cancel" >
                        <Button type="secondary" size="large"
                            style={{ margin: "10px", marginBottom: "20px" }}
                            onClick={this.navigateToOwnerProfile}
                        >Cancel</Button>
                    </div>
                </Form>
                <Divider />
            </div>
        );
    }
}


export default withRouter(OwnerProfileCreateRestaurant);