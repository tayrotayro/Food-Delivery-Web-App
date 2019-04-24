import React, { Component } from 'react';
import { Table, Divider } from 'antd';

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'Name',
        },
        {
            title: 'Description',
            dataIndex: 'Description',
        },
        {
            title: 'Price',
            dataIndex: 'Price',
        },
        {
            title: 'Action',
            key: 'Action',
            render: (text, record) => (
                <div>
                    <a href="">Edit</a>
                    <Divider type="vertical" />
                    <a href="">Delete</a>
                </div>
            ),
        }];

        const data = [{
            Name: 'food',
            Description: 'soemthing that tastes good',
            Price: '$10',
        },
        {
            Name: 'cheese burger',
            Description: 'a piece of meat with cheese on it',
            Price: '$12',
        }];

        

        return (

            <Table columns={columns} dataSource={data} />
        )
    }
}

export default MenuList;