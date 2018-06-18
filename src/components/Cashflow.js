import React, {Component} from 'react';
import {connect} from 'react-redux';
import IncomeDistribution from './IncomeDistribution';
import { Link } from 'react-router-dom';
import Boxes from  './Boxes';
import FaHandODown from 'react-icons/lib/fa/hand-o-down';

class Cashflow extends Component{




	render(){

		const {incomeDetails} = this.props;

		if(!incomeDetails.annualIncome){
			return (
				<div className="col-offset-3 col-6 title">
					<h2>Cash Inflow Distribution</h2>
					<p>No Income Data</p>
					<FaHandODown className="icon_alt"/>
					<Link to="/parameters" className="link_btn">GET STARTED</Link>
				</div>
			)
		} else if(!this.props.boxes){
			return (
				<div className="row cashflow_container">
					<IncomeDistribution incomeDetails={incomeDetails}/>
					<p>No Boxes registered.</p>
					<FaHandODown className="icon_alt"/>
					<Link to="/parameters" className="link_btn">ADD NEW BOXES</Link>
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