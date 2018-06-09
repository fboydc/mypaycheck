import React, {Component} from 'react';
import {FormattedIncome} from '../helpers';



export default class IncomeDistribution extends Component {




	convertIncome = ()=>{
		console.log(this.props);
		//const formattedIncome = new FormattedIncome({annualIncome, })
		/*const {annualIncome, frequency} = this.props;




		switch(frequency){
			case 'biweekly':
				return annualIncome/26
			default:
				return annualIncome
		}*/

	}

	render(){

		this.convertIncome();

		return(
			<div className="col-offset-3 col-6 title">
						<h2>Cash Inflow Distribution</h2>
						<div className="row income_table">
							<table className="table">
								<tbody>
									<tr>
										<th>Pay Frequency</th>
										<th>Net Periodic Income</th>
									</tr>
									<tr>
										<td>

										</td>
										<td>

										</td>
									</tr>
								</tbody>
							</table>
						</div>
				</div>

		)
	}
}


