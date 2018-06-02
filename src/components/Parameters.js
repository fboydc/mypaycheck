import React, {Component} from 'react';


export default class Parameters extends Component {

	render(){
		return (
			<div className="col-offset-3 col-6 income-form-container">
				<div className="income-form">
					<div className="income-form-item">
						<label>Annual Salary:</label>
						<input></input>
					</div>
					<div className="income-form-item">
						<label>Frequency:</label>
						<input></input>
					</div>
					<div className="income-form-item">
						<label>Filing Status:</label>
						<input></input>
					</div>
				</div>
			</div>
		)
	}
}