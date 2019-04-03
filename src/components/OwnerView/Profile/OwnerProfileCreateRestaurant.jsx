import React, { Component } from 'react';
import { Form, Input, Divider, Select, Button, TimePicker } from 'antd';
import { withRouter } from 'react-router';
import './style.css';
import FormItem from 'antd/lib/form/FormItem';
import moment from 'moment';

class OwnerProfileCreateRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Modal values
            name: "",
            address: "",
            phone: "",
            description: "",
            hours: "",
            pictureURL: "",
            priceRange: "",
            monHour: [],
            tueHour: [],
            wedHour: [],
            thuHour: [],
            friHour: [],
            satHour: [],
            sunHour: []
        }
    }

    //TODO: write function for each time picker to push times to state list.

    navigateBack = () => {
        this.props.history.push('/owner-home');
    }

    render() {
        const Option = Select.Option;

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
                        <Input placeholder="Description" required
                            style={{ width: '300px' }}
                            onChange={(result) => {
                                this.setState({
                                    description: result.target.value
                                })
                            }} />
                    </Form.Item>
                    <Select defaultValue="$" style={{ width: 120 }} onChange={handleChange} required>
                        <Option value="one">$</Option>
                        <Option value="two">$$</Option>
                        <Option value="three">$$$</Option>
                        <Option value="four">$$$$</Option>
                    </Select>

                    <div className="restaurant-hours" >
                        <h1>Restaurant Hours</h1>
                        <FormItem>
                            <h3>Monday Hours</h3>
                            <TimePicker style={{ margin: "10px" }} use24Hours
                                secondStep={30}
                                minuteStep={30}
                              //  onChange={this.state.monHour.push(moment.value)}
                                defaultValue={moment('09:30', 'HH:mm')} />

                            <TimePicker style={{ margin: "10px" }} use24Hours
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />
                        </FormItem>

                        <h3>Tuesday Hours</h3>
                        <FormItem>
                            <TimePicker style={{ margin: "10px" }} use24Hours
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />

                            <TimePicker style={{ margin: "10px" }} use24Hours
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />
                        </FormItem>

                        <h3>Wednesday Hours</h3>
                        <FormItem style={{ padding: "10px" }}>
                            <TimePicker use24Hours style={{ margin: "10px" }}
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />

                            <TimePicker use24Hours style={{ margin: "10px" }}
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />
                        </FormItem>

                        <h3>Thursday Hours</h3>
                        <FormItem>
                            <TimePicker use24Hours style={{ margin: "10px" }}
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />

                            <TimePicker use24Hours style={{ margin: "10px" }}
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />
                        </FormItem>

                        <h3>Friday Hours</h3>
                        <FormItem>
                            <TimePicker use24Hours style={{ margin: "10px" }}
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />

                            <TimePicker use24Hours style={{ margin: "10px" }}
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />
                        </FormItem>

                        <h3>Saturday Hours</h3>
                        <FormItem>
                            <TimePicker use24Hours style={{ margin: "10px" }}
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />

                            <TimePicker use24Hours style={{ margin: "10px" }}
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />
                        </FormItem>

                        <h3>Sunday Hours</h3>
                        <FormItem>
                            <TimePicker use24Hours style={{ margin: "10px" }}
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />

                            <TimePicker use24Hours style={{ margin: "10px" }}
                                secondStep={30}
                                minuteStep={30}
                                onChange={onChange}
                                defaultValue={moment('09:30', 'HH:mm')} />
                        </FormItem>
                    </div>


                    <div className="create-button-submit">
                        <Button type="primary" size="large"
                            style={{}}
                            onClick={this.submit}
                        >Create Restaurant</Button>
                    </div>
                    <div className="create-button-cancel" >
                        <Button type="secondary" size="large"
                            style={{ margin: "10px", marginBottom: "20px" }}
                            onClick={this.navigateBack}
                        >Cancel</Button>
                    </div>
                </Form>
                <Divider />
            </div>
        );
    }
}


export default withRouter(OwnerProfileCreateRestaurant);