import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';

class CardInfo extends Component {
	state = {
		visible: false,
	};

	handleMenuClick = (e) => {
		if (e.key === '3') {
			this.setState({ visible: false });
		}
	}

	handleVisibleChange = (flag) => {
		this.setState({ visible: flag });
	}

	render() {
		const menu = (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item key="1">address: 123 Oxford St. </Menu.Item>
				<Menu.Item key="2">Contents: Cheese Burger and Fries</Menu.Item>
				<Menu.Item key="3">Close</Menu.Item>
			</Menu>
		);
		return (
			<div>
			<Dropdown
				overlay={menu}
				onVisibleChange={this.handleVisibleChange}
				visible={this.state.visible}
			>
				<a className="ant-dropdown-link" href="#">
					Order Info <Icon type="down" />
				</a>
			</Dropdown>
			</div>
		);
	}
}


export default CardInfo;