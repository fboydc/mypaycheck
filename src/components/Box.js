import React, {Component} from 'react';

export default class Box extends Component {

	getBoxTotal = ()=>{
		let total = 0;

		this.props.box.items.forEach((item)=>{
			total += Number(item.amount);
		});

		return total;
	}

	getFrequency = ()=>{
		const {frequency} = this.props;

		switch(true){
			case (frequency === 'biweekly'):
				return .50;
			case (frequency === 'monthly'):
				return 1;
			default:
				return 1;
		}
	}

	render(){

		const length = this.props.box.items.length;
		return (
			<div className="box_table">
				<table className="table">
					<tbody className="table">
						<tr>
							<th colSpan={2}>
								{this.props.box.name}
							</th>
						</tr>
						<tr>
							<th>Detail</th>
							<th>Amount</th>
						</tr>
						{
							this.props.box.items.map((item, i)=>{

									return (
										<tr key={item.name}>
											<td>{item.name}</td>
											<td>{item.amount}</td>
										</tr>
									)

							})

						}
						<tr>
							<td>
								<strong>Total</strong>
							</td>
							<td>
								{this.getBoxTotal()}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}