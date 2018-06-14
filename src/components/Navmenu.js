import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import {getBoxes, getIncomeDetails} from '../actions';
import api from '../api';
import {connect} from 'react-redux';
import FaBars from 'react-icons/lib/fa/bars';



class Navmenu extends Component{

	constructor(){
		super();
		this.state = {
			vpwidth: window.innerWidth
		}
	}

	componentDidMount(){
		const details = api.getIncomeDetails();
		const boxes = api.getBoxes();
		if(details)
			this.props.getDetails(details);
		if(boxes)
			this.props.getBoxes(boxes);

		window.addEventListener('resize', ()=>{
			this.setState({vpwidth: window.innerWidth});
		})
	}

	componentDidUnmount(){
		window.removeEventListener('resize');
	}


	render(){


		if(this.state.vpwidth > 438){
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
			);
		}else{
			return(
				<header className="row header mobile_header">
					<div>
						<button className="hamburger">
							<FaBars />
						</button>
					</div>
					<div className="dropdown-content">
						<li><Link to="/">DASHBOARD</Link></li>
						<li><Link to="/cashflow">CASHFLOW PLAN</Link></li>
						<li><Link to="/parameters">PARAMETERS</Link></li>
					</div>
				</header>
				);
		}

	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getBoxes: (boxes) => dispatch(getBoxes(boxes)),
		getDetails: (details) => {dispatch(getIncomeDetails(details))}
	}
}

export default connect(null, mapDispatchToProps)(Navmenu)