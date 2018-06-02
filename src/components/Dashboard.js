import React, {Component} from 'react';
import api from '../api';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane-o';
import { Link } from 'react-router-dom';


export default class Dashboard extends Component {



	render(){

		if(api.getBoxes()){
			return (
			<section className="row income_distribution">
				<h2>Income Distribution</h2>
				<p>Income Distributed as configured</p>
			</section>
			)
		}else{
			return (
				<section className="no_data col-offset-3 col-6">
					<p className="icon"><FaPaperPlane /></p>
					<p>NO PARAMETERS SET. CLICK HERE TO START:</p>
					<Link to="/parameters" className="link_btn">PARAMETERS</Link>
				</section>
			)
		}

	}


}