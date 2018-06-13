import React, {Component} from 'react';
import FormattedIncome from '../helpers';



export default class IncomeDistribution extends Component {




	getFormattedIncome = ()=>{
		const formattedIncome = new FormattedIncome(this.props.incomeDetails);
		return { monthly: formattedIncome.getMonthlyIncome(), periodic: formattedIncome.getPeriodicIncome(), frequency: formattedIncome.frequency}

	}

	render(){

		const { monthly, periodic, frequency } =  this.getFormattedIncome();
		return (
			<div className="col-10 col-sm-10 col-xs-11 title">
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
											{ frequency }
										</td>
										<td>
											{ periodic }
										</td>
									</tr>
								</tbody>
							</table>
						</div>
			</div>
			)
		/*return(
			<div className="col-offset-2 col-offset-sm-2 col-offset-xs-2 col-8 col-sm-8 col-xs-8 title">
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
											{ frequency }
										</td>
										<td>
											{ periodic }
										</td>
									</tr>
								</tbody>
							</table>
						</div>
				</div>

		)*/
	}
}


