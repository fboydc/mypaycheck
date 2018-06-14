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
			vpwidth: window.innerWidth,
			hidden: true
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

	toggleDropDown = ()=>{
		this.setState({hidden: !this.state.hidden})
	}

	render(){


		if(this.state.vpwidth > 454){
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
		}else if(this.state.hidden){
			return (
				<header className="mobile_header">
					<div className="hamburger_container">
						<span className="hamburger" onClick={this.toggleDropDown}>
							<FaBars />
						</span>
					</div>
				</header>
				)
		}else{
			return(
				<header className="mobile_header">
					<div className="hamburger_container">
						<span className="hamburger" onClick={this.toggleDropDown}>
							<FaBars />
						</span>
					</div>
					<Link to="/" className="mobile_link">DASHBOARD</Link>
					<Link to="/cashflow" className="mobile_link">CASHFLOW PLAN</Link>
					<Link to="/parameters" className="mobile_link">PARAMETERS</Link>
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