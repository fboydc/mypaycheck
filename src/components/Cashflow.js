import React, {Component} from 'react';
import {connect} from 'react-redux';
import IncomeDistribution from './IncomeDistribution';

class Cashflow extends Component{




	render(){

		const {annualIncome, frequency} = this.props;

		if(!annualIncome){
			return (
				<div className="col-offset-3 col-6 title">
					<h2>Cash Inflow Distribution</h2>
					<p>No Income Data</p>
				</div>
			)
		}else {
			return (
				<IncomeDistribution/>
			)

		}



	}
}


const mapStateToProps = (state)=> {
	return {
		frequency: state.incomeDetails.frequency,
		annualIncome: state.incomeDetails.annualIncome
	}
}


export default connect(mapStateToProps, null)(Cashflow)