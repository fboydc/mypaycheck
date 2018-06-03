import React, {Component} from 'react';
import FaLock from 'react-icons/lib/fa/lock';
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt';


export default class IncomeDetails extends Component {

	constructor(){
		super()
		this.state = {
			filingStatus: 'single',
			frequency: 'biweekly',
			state: 'florida',
			city: 'miami',
			locked: false
		}
	}

	handleStatusChange = () =>{
		this.setState({filingStatus: this.filingStatus.value})
	}

	handleFrequencyChange = () =>{
		this.setState({frequency: this.frequency.value})
	}

	handleStateChange = () => {
		this.setState({currentState: this.currentState.value})
	}

	handleCityChange = () => {
		this.setState({city: this.city.value})
	}

	toggleLock = () => {
		console.log("toggle")
		this.setState({locked: !this.state.locked})
	}

	render(){

		if(this.state.locked){
			return(
					<div className="col-offset-3 col-6 income-form-container locked">
						<div className="income-form-header">
							<h2>Income Details</h2>
							<button className="lock" onClick={this.toggleLock}><FaLock /></button>
						</div>
						<div className="income-form">
							<div className="income-form-item">
								<label>Annual Salary:</label>
								<input type="number" disabled/>
							</div>
							<div className="income-form-item">
								<label>Filing Status:</label>
								<select value={this.state.filingStatus} onChange={this.handleStatusChange} ref={(input)=>{this.filingStatus = input}} disabled>
									<option value="single">single</option>
									<option value="jointly">married, filing jointly</option>
								</select>
							</div>
							<div className="income-form-item">
								<label>Pay Frequency:</label>
								<select value={this.state.frequency} onChange={this.handleFrequencyChange} ref={(input)=>{this.frequency = input}} disabled>
									<option value="biweekly">biweekly</option>
									<option value="monthly">monthly</option>
								</select>
							</div>
							<div className="income-form-item">
								<label>Federal Allowances</label>
								<input type="number" min="0" step="1" disabled/>
							</div>
							<div className="income-form-item">
								<label>Pre-tax deductions:</label>
								<input type="number" disabled/>
							</div>
							<div className="income-form-item">
								<label>State</label>
								<select value={this.state.currentState} onChange={this.handleStateChange} ref={(input)=>{this.currentState = input}} disabled>
									<option value="florida">FL</option>
								</select>
							</div>
							<div className="income-form-item">
								<label>City</label>
								<select value={this.state.city} onChange={this.handleCityChange} ref={(input)=>{this.city = input}} disabled>
									<option value="miami">MIA</option>
								</select>
							</div>
							<div className="button-container">
								<button className="button locked" disabled>
									Save
								</button>
								<button className="button clear-button" disabled>
									Clear
								</button>
							</div>
							
						</div>
					</div>
				)
			
		}else{
			return(
				<div className="col-offset-3 col-6 income-form-container">
					<div className="income-form-header">
						<h2>Income Details</h2>
						<button className="lock" onClick={this.toggleLock}><FaUnlockAlt /></button>
					</div>
					<div className="income-form">
						<div className="income-form-item">
							<label>Annual Salary:</label>
							<input type="number"/>
						</div>
						<div className="income-form-item">
							<label>Filing Status:</label>
							<select value={this.state.filingStatus} onChange={this.handleStatusChange} ref={(input)=>{this.filingStatus = input}}>
								<option value="single">single</option>
								<option value="jointly">married, filing jointly</option>
							</select>
						</div>
						<div className="income-form-item">
							<label>Pay Frequency:</label>
							<select value={this.state.frequency} onChange={this.handleFrequencyChange} ref={(input)=>{this.frequency = input}}>
								<option value="biweekly">biweekly</option>
								<option value="monthly">monthly</option>
							</select>
						</div>
						<div className="income-form-item">
							<label>Federal Allowances</label>
							<input type="number" min="0" step="1"/>
						</div>
						<div className="income-form-item">
							<label>Pre-tax deductions:</label>
							<input type="number"/>
						</div>
						<div className="income-form-item">
							<label>State</label>
							<select value={this.state.currentState} onChange={this.handleStateChange} ref={(input)=>{this.currentState = input}}>
								<option value="florida">FL</option>
							</select>
						</div>
						<div className="income-form-item">
							<label>City</label>
							<select value={this.state.city} onChange={this.handleCityChange} ref={(input)=>{this.city = input}}>
								<option value="miami">MIA</option>
							</select>
						</div>
						<div className="button-container">
							<button className="button">
								Save
							</button>
							<button className="button clear-button">
								Clear
							</button>
						</div>
						
					</div>
				</div>
				)
		}

	}
}