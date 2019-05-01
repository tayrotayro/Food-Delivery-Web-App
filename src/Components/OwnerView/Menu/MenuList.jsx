import React, { Component } from 'react';
import { Table, Divider } from 'antd';
import axios from 'axios';


class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }


    // componentDidMount() {
    //     const baseUserId = localStorage.getItem('loggedInUserId');

    //     axios.get(`http://localhost:5000/api/restaurant/${baseUserId}`)
    //         .then(response => {
    //             const menuId = restaurants.menuId;
    //             console.log(response);
    //             this.setState({
    //                 restaurants: response.data.data
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }



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

        const data = {
            Name: 'jim',
            Description: "great food",
            Price: '10'
        }

    // this.restaurants.map(info => {
    //     return(
    //         const data = {
    //             Name: {},
    //             Description: 'soemthing that tastes good',
    //             Price: '$10',
    //         }
    //     )
    // })
        
 
        return (

            <Table columns={columns} dataSource={data} />
        )
    }
}

export default MenuList;