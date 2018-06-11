import React, {Component} from 'react';

export default class Box extends Component {

	getBoxTotal = ()=>{
		let total = 0;

		this.props.box.items.forEach((item)=>{
			total += Number(item.amount);
		});

		return total;
	}

	render(){

		const length = this.props.box.items.length;
		return (
			<div className="box_table">
				<table>
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
										<tr>
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