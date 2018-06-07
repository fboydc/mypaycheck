import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class Cashflow extends Component{
	render(){
		return (
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


const mapStateToProps = (state)=> {
	return {

	}
}