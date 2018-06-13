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

	loadSpinner = () => {
		console.log("loading spinner");
		this.setState({loading: !this.state.loading})
	}


	render(){
		const { boxes, incomeDetails } = this.props;


		console.log("length", Object.keys(incomeDetails).length);

		if(this.state.loading){
			return (<div className="row config_container">
				<ReactLoading type={"spin"} color={"#000"} />
			</div>);
		}else if(Object.keys(incomeDetails).length === 0){
			return (
				<div className="row config_container">
					<IncomeDetails loadSpinner={this.loadSpinner}/>
					<div className="col-offset-1 col-10 col-offset-sm-1 col-sm-12 params-boxes">
						<h2>Boxes</h2>
						<p>Please fill out your income details first.</p>
					</div>
				</div>
			)
		}else if(boxes.length > 0){
			return(
				<div className="row config_container">
					<IncomeDetails loadSpinner={this.loadSpinner}/>
					<div className="col-10 col-sm-10 col-xs-12 params-boxes">
						<h2>Boxes</h2>
						<ConfigBoxes boxes={boxes} loadSpinner={this.loadSpinner}/>
						<NewBox loadSpinner={this.loadSpinner}/>
					</div>

				</div>
			)
		} else{
			return(
				<div>
					<IncomeDetails loadSpinner={this.loadSpinner}/>
					<div className="col-10 col-sm-10 col-xs-12 params-boxes">
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
		boxes: state.boxes,
		incomeDetails: state.incomeDetails
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		getBoxes: (boxes)=>dispatch(getBoxes(boxes))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Parameters)



