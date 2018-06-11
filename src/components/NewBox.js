import React, {Component} from 'react';
import {addBox} from '../actions';
import api from '../api';
import {connect} from 'react-redux';
import {NotificationManager} from 'react-notifications';
import FormattedIncome from '../helpers';


class NewBox extends Component {

	constructor(){
		super();
		this.state = {
			boxName: '',
			loading: false
		}
	}

	handleBoxName = ()=>{
		this.setState({boxName: this.input.value})
	}

	createBox = ()=>{
		this.props.loadSpinner()
		const box = api.createBox(this.state.boxName)
		setTimeout(()=>{
			this.props.createBox(box);
			this.props.loadSpinner();
			NotificationManager.success('New box added');
			this.setState({boxName: ''});
		}, 1000)


	}


	render(){
		if(this.props.amountLeft){
			return (
				<div className="col-6 col-sm-10 col-xs-10 new_box_form">
					<div className="new_box_header">
						<h3>ADD NEW</h3>
					</div>
					<div className="new_box_body">
						<div className="new_box_input">
							<label>NAME:</label><input type="text" className="input" value={ this.state.boxName} onChange={this.handleBoxName} ref={(input)=>{this.input = input}}/>
						</div>
						<button className="button" onClick={this.createBox}>Create</button>
					</div>
				</div>
			)
		}else{
			return (
				<p>All Income has been allocated</p>
			)
		}
		
	}
}

const mapStateToProps = (state) => {

	let totalInBoxes = 0;

	state.boxes.forEach((box)=>{
		box.items.forEach(item=>{
			totalInBoxes += Number(item.amount);
		})
	});

	console.log("true?",  totalInBoxes.toFixed(2) !== new FormattedIncome(state.incomeDetails).getMonthlyIncome().toFixed(2));
	return {
		boxes: state.boxes.entries,
		amountLeft: totalInBoxes.toFixed(2) !== new FormattedIncome(state.incomeDetails).getMonthlyIncome().toFixed(2)
	}
}



const mapDispatchToProps = (dispatch)=> {
	return {
		createBox: (box) => dispatch(addBox(box))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(NewBox)