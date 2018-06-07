import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import {getBoxes, getIncomeDetails} from '../actions';
import api from '../api';
import {connect} from 'react-redux';



class Navmenu extends Component{

	componentDidMount(){
		const details = api.getIncomeDetails();
		const boxes = api.getBoxes();
		console.log("details in nav menu", details);
		if(details)
			this.props.getDetails(details);
		if(boxes)
			this.props.getBoxes(boxes);
	}


	render(){
		return(
			<header className="row header">
				<nav className="navmenu">
					<ul>
						<li><Link to="/">DASHBOARD</Link></li>
						<li><Link to="/cashflow">CASHFLOW PLAN</Link></li>
						<li><Link to="/parameters">PARAMETERS</Link></li>
					</ul>
				</nav>
			</header>
		)
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getBoxes: (boxes) => dispatch(getBoxes(boxes)),
		getDetails: (details) => {dispatch(getIncomeDetails(details))}
	}
}

export default connect(null, mapDispatchToProps)(Navmenu)