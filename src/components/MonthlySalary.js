import React, {Component} from 'react';


export default class MonthylSalary extends Component {
	render(){
		return (
			<table className="table">
				<tbody>
					<tr>
						<th>Monthly Income (After Taxes)</th>
					</tr>
					<tr>
						<td className="centered">{this.props.monthly.toFixed(2)}</td>
					</tr>
				</tbody>
			</table>
		)
	}
}