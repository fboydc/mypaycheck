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
			<div className="box_distribution col-12 col-sm-8 col-xs-12">
				<table className="table col-6 col-sm-11 col-xs-11">
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
				<PieContainer roofValue={roofValue} data={data}/>
			</div>
		)
	}
}