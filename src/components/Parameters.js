import React, {Component} from 'react';
import IncomeDetails from './IncomeDetails';
import NewBox from './NewBox';
import ConfigBoxes from './ConfigBoxes';
import api from '../api';
import FaExclamationCircle from 'react-icons/lib/fa/exclamation-circle';
import {connect} from 'react-redux';
import {getBoxes} from '../actions';
import ReactLoading from 'react-loading';

class Parameters extends Component {


	constructor(){
		super();
		this.state = {
			loading: false
		}
	}

	componentDidMount() {
		console.log("boxes", api.getBoxes());
		this.props.getBoxes(api.getBoxes());
	}

	loadSpinner = () => {
		this.setState({loading: !this.state.loading})
	}


	render(){
		const { boxes } = this.props;

		let loader;
		if(this.state.loading){
			loader = <ReactLoading type={"spin"} color={"#000"} className="loading"/>
		}


		if(boxes.length > 0){
			return(
				<div>
					{loader}
					<IncomeDetails loadSpinner={this.loadSpinner}/>
					<div className="col-offset-3 col-6 params-boxes">
						<h2>Boxes</h2>
						<ConfigBoxes boxes={boxes}/>
						<NewBox loadSpinner={this.loadSpinner}/>
					</div>

				</div>
			)
		}else{
			return(
				<div>
					{loader}
					<IncomeDetails loadSpinner={this.loadSpinner}/>
					<div className="col-offset-3 col-6 params-boxes">
						<h2>Boxes</h2>
						<p className="warning"><FaExclamationCircle/> No Boxes</p>
						<NewBox loadSpinner={this.loadSpinner}/>
					</div>

				</div>
			)
		}




	}
}


const mapStateToProps = (state) => {

	//console.log("state in props", state);
	return {
		boxes: state.boxes
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		getBoxes: (boxes)=>dispatch(getBoxes(boxes))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Parameters)



