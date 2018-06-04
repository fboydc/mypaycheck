import React, {Component} from 'react';
import IncomeDetails from './IncomeDetails';
import NewBox from './NewBox';
import ConfigBoxes from './ConfigBoxes';
import api from '../api';
import FaExclamationCircle from 'react-icons/lib/fa/exclamation-circle';


export default class Parameters extends Component {




	render(){

		if(api.getBoxes()){
			return(
				<div>
					<IncomeDetails />
					<div className="col-offset-3 col-6 params-boxes">
						<h2>Boxes</h2>
					</div>
					<ConfigBoxes />
				</div>
			)	
		}else{
			return(
				<div>
					<IncomeDetails />
					<div className="col-offset-3 col-6 params-boxes">
						<h2>Boxes</h2>
						<p className="warning"><FaExclamationCircle/> No Boxes</p>
						<NewBox />
					</div>

				</div>
			)	
		}


		

	}
}