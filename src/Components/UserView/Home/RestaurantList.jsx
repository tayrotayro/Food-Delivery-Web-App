import { List, Avatar, Icon } from 'antd';
import React, { Component } from 'react';


const listData = [];
for (let i = 0; i < 23; i++) {
	listData.push({
		href: 'http://ant.design',
		title: `restaurant ${i}`,
		avatar: 'https://citygroceryonline.com/wp-content/uploads/2015/05/boure-logo.png',
		description: '',
		content: '',
	});
}

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
);

class RestaurantList extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<List
				itemLayout="vertical"
				size="large"
				pagination={{
					onChange: (page) => {
						console.log(page);
					},
					pageSize: 3,
				}}
				dataSource={listData}
				renderItem={item => (
					<List.Item
						key={item.title}
						extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
					>
						<List.Item.Meta
							avatar={<Avatar src={item.avatar} />}
							title={<a href={item.href}>{item.title}</a>}
							description={item.description}
						/>
						{item.content}
					</List.Item>
				)}
			/>
		)
	}
}

export default RestaurantList;