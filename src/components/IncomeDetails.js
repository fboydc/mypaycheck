import React, {Component} from 'react';
import FaLock from 'react-icons/lib/fa/lock';
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import ReactLoading from 'react-loading';
import api from '../api';
import {connect} from 'react-redux';
import {getIncomeDetails, addIncomeDetails} from '../actions';



class IncomeDetails extends Component {

	constructor(props){
		super(props)
		console.log("this.props", this.props.incomeDetails);
		this.state = {
			annualIncome: 0,
			federalAllowances: 0,
			pretaxDeductions: 0,
			filingStatus: 'single',
			frequency: 'biweekly',
			state: 'florida',
			city: 'miami',
			locked: true
		}
	}



	componentDidMount(){

		const details = api.getIncomeDetails();

		if(details){
			this.resetForm(details);
		}
		return

	}

	resetForm = ({annualIncome, federalAllowances, pretaxDeductions, filingStatus, frequency, state, city })=>{
		this.setState({annualIncome: annualIncome, federalAllowances:federalAllowances, filingStatus: filingStatus, frequency: frequency, state: state, city:city});
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
		this.resetForm(api.getIncomeDetails());
		this.setState({locked: !this.state.locked})
	}




	saveIncomeDetail = () => {


		//const { salary, federalAllowances, pretaxDeductions, filingStatus, frequency, state, city } = this.state;
		const details = {annualIncome: this.state.annualIncome, federalAllowances: this.state.federalAllowances, pretaxDeductions: this.state.pretaxDeductions, filingStatus: this.state.filingStatus, frequency: this.state.frequency, state: this.state.state, city: this.state.city}
		//console.log("salary", salary);
		this.props.loadSpinner();
		api.addIncomeDetails(details);
		this.props.getDetails(details);
		setTimeout(()=>{
			this.props.loadSpinner();
			this.toggleLock();
			NotificationManager.success('This is a message');
		}, 1000);


	}

	handleSalaryInput = () => {
		this.setState({annualIncome: this.salary.value});
	}

	handleFedInput = () => {
		this.setState({federalAllowances: this.fed.value});
	}

	handlePretaxChange = () => {
		this.setState({pretaxDeductions: this.pretax.value});
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
								<input type="number" disabled className="input" value={this.state.annualIncome}/>
							</div>
							<div className="income-form-item">
								<label>Filing Status:</label>
								<select value={this.state.filingStatus} disabled>
									<option value="single">single</option>
									<option value="jointly">married, filing jointly</option>
								</select>
							</div>
							<div className="income-form-item">
								<label>Pay Frequency:</label>
								<select value={this.state.frequency}  ref={(input)=>{this.frequency = input}} disabled>
									<option value="biweekly">biweekly</option>
									<option value="monthly">monthly</option>
								</select>
							</div>
							<div className="income-form-item">
								<label>Federal Allowances</label>
								<input type="number" min="0" step="1" disabled className="input" value={this.state.federalAllowances}/>
							</div>
							<div className="income-form-item">
								<label>Pre-tax deductions:</label>
								<input type="number" disabled className="input" value={this.state.pretaxDeductions}/>
							</div>
							<div className="income-form-item">
								<label>State</label>
								<select value={this.state.currentState}  ref={(input)=>{this.currentState = input}} disabled>
									<option value="florida">FL</option>
								</select>
							</div>
							<div className="income-form-item">
								<label>City</label>
								<select value={this.state.city}  ref={(input)=>{this.city = input}} disabled>
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
							<NotificationContainer/>
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
							<input type="number" className="input" ref={(input)=>{this.salary = input}} value={this.state.annualIncome} onChange={this.handleSalaryInput}/>
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
							<input type="number" min="0" step="1" className="input" ref={(input)=>{this.fed = input}} value={this.state.federalAllowances} onChange={this.handleFedInput}/>
						</div>
						<div className="income-form-item">
							<label>Pre-tax deductions:</label>
							<input type="number" className="input" value={this.state.pretaxDeductions} ref={(input)=>{this.pretax = input}} onChange={this.handlePretaxChange}/>
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
							<button className="button" onClick={this.saveIncomeDetail}>
								Save
							</button>
							<button className="button clear-button">
								Clear
							</button>
						</div>
						<NotificationContainer/>
					</div>
				</div>
				)
		}

	}
}

const mapStateToProps = (state) => {

	return {
		incomeDetails: {...state.incomeDetails}
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getDetails: (details) => {dispatch(getIncomeDetails(details))},
		addDetails: (details) => {dispatch(addIncomeDetails(details))}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(IncomeDetails)