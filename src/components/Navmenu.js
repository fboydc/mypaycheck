import React, {Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navmenu extends Component{
	render(){
		return(
			<header className="row header">
				<nav className="navmenu">
					<ul>
						<li><Link to="/">DASHBOARD</Link></li>
						<li><Link to="/cashflow">CASHFLOW PLAN</Link></li>
						<li>PARAMETERS</li>
					</ul>
				</nav>
			</header>
		)
	}
}