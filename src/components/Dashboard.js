import React, {Component} from 'react';
import api from '../api';
import FontAwesome from 'react-fontawesome';


export default class Dashboard extends Component {



	render(){
		console.log(FontAwesome);

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
					<p>NO PARAMETERS SET. CLICK HERE TO START:</p>

				</section>
			)
		}

	}


}