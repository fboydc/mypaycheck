import React, {Component} from 'react';
import {connect} from 'react-redux';
import IncomeDistribution from './IncomeDistribution';
import Boxes from  './Boxes';

class Cashflow extends Component{




	render(){

		const {incomeDetails} = this.props;

		if(!incomeDetails.annualIncome){
			return (
				<div className="col-offset-3 col-6 title">
					<h2>Cash Inflow Distribution</h2>
					<p>No Income Data</p>
				</div>
			)
		} else if(!this.props.boxes){
			return (
				<div className="col-12 col-sm-12 col-xs-12">
					<IncomeDistribution incomeDetails={incomeDetails}/>
					<p>No Boxes registered.</p>
				</div>
			)
		}else {
			return (
				<div className="row cashflow_container">
					<IncomeDistribution incomeDetails={incomeDetails}/>
					<Boxes boxes frequency={incomeDetails.frequency}/>
				</div>

			)

		}



	}
}


const mapStateToProps = (state)=> {
	return {
		incomeDetails: state.incomeDetails,
		boxes: (state.boxes.length > 0)
	}
}


export default connect(mapStateToProps, null)(Cashflow)