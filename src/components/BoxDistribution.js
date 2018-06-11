import React, {Component} from 'react';
import PieContainer from './PieContainer';


export default class BoxDistribution extends Component {


	render(){
		const {items} = this.props.box;
		let roofValue = 0;

		items.forEach(item=>{
			roofValue += Number(item.amount);
		});

		console.log("roof value", roofValue);

		const data = items.map(item=>{
			return {
				item: item.name,
				value: item.amount
			}
		})

		return (
			<div className="box_distribution">
				<table className="table">
					<tbody>
						{items.map(item=>{
							return (
								<tr>
									<th>{item.name}</th>
									<td>{item.amount}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<PieContainer roofValue={roofValue} data={data} />
			</div>
		)
	}
}