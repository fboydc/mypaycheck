import React, {Component} from 'react';
import IncomeDetails from './IncomeDetails';
import NewBox from './NewBox';
import ConfigBoxes from './ConfigBoxes';
import api from '../api';
import FaExclamationCircle from 'react-icons/lib/fa/exclamation-circle';
import {connect} from 'react-redux';
import {getBoxes} from '../actions';
import ReactLoading from 'react-loading';
import * as demoData from '../lib/demodata';
import {getIncomeDetails, addBoxes, removeIncomeDetails, removeBoxes} from '../actions';

class Parameters extends Component {


	constructor(){
		super();
		this.state = {
			loading: false
		}
	}

	loadSpinner = () => {
		this.setState({loading: !this.state.loading})
	}

	loadSampleData = () => {
		this.loadSpinner();
		setTimeout(()=>{
			api.addIncomeDetails(demoData.incomeDetails);
			api.batchBoxes(demoData.boxes);

			this.props.insertDummyData(demoData.incomeDetails, demoData.boxes);
			this.loadSpinner();
		}, 2000);
	}

	wipeData = () =>{
	this.loadSpinner();
		setTimeout(()=>{
			api.removeBoxes();
			api.removeIncomeDetails();
			this.props.removeData();
			this.loadSpinner();
		}, 2000);
	}


	render(){
		const { boxes, incomeDetails } = this.props;




		if(this.state.loading){
			return (<div className="row config_container">
				<ReactLoading type={"spin"} color={"#000"} />
			</div>);
		}else if(Object.keys(incomeDetails).length === 0){
			return (
				<div className="row config_container">
					<button className="button" onClick={this.loadSampleData}>Use Sample Data?</button>
					<IncomeDetails loadSpinner={this.loadSpinner}/>
					<div className="col-10 col-sm-10 col-xs-12 params-boxes">
						<h2>Boxes</h2>
						<p>Please fill out your income details first.</p>
					</div>
				</div>
			)
		}else if(boxes.length > 0){
			return(
				<div className="row config_container">
					<button className="button" onClick={this.wipeData}>Wipe Data</button>
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
				<div className="row config_container">
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

	return {
		boxes: state.boxes,
		incomeDetails: state.incomeDetails
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		getBoxes: (boxes)=>dispatch(getBoxes(boxes)),
		insertDummyData: (details, boxes) => {
			dispatch(getIncomeDetails(details));
			dispatch(addBoxes(boxes));
		},
		removeData: ()=>{
			dispatch(removeIncomeDetails());
			dispatch(removeBoxes());
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Parameters)



