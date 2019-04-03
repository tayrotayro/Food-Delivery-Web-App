import React, { Component } from 'react';
import { Card } from 'antd';
import CardInfo from './CardInfo';


const gridStyle = {
	width: '50%',
	textAlign: 'center',
}

class PastOrderCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}


	render() {
		return (

			<Card
				type="inner"
				title="Payton-Karno"
			>

				<Card.Grid style={{ gridStyle }}><CardInfo /></Card.Grid>
				<Card.Grid style={{ gridStyle }}>Completed</Card.Grid>
				<Card.Grid style={{ gridStyle }}>total: $25.00</Card.Grid>

			</Card>


		)
	}
}
export default PastOrderCard;