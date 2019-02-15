import React, { Component } from 'react';
import { Menu, Icon, Input, Badge } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail'
        }
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <div className="nav-wrapper">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="Home">
                        <Icon type="home" />Home
            </Menu.Item>
                    <Menu.Item key="restaurants">
                        <Icon type="shop" />Restaurants
            </Menu.Item>
                    <Menu.Item key="orders">
                        <Icon type="ordered-list" />Orders
            </Menu.Item>
                    <Menu.Item key="cart">
                        <Badge count={0} size="small">
                            <Icon type="shopping-cart" />Cart
                    </Badge>
                    </Menu.Item>

                    <Menu.Item key="settings">
                        <Icon type="setting" />Settings
            </Menu.Item>
                    <div className="search-bar">
                        <Search
                            placeholder="Search Filters"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </div>
                </Menu>
            </div>
        )
    }
}

export default Dashboard;