import React, {Component} from 'react';
import api from '../api';
import ConfigBox  from './ConfigBox';
import {connect} from 'react-redux';
import {getBoxes} from '../actions';
import FormattedIncome from '../helpers';


class ConfigBoxes extends Component {




	render(){
		const {boxes} = this.props;

		if((this.props.monthly - this.props.total) !== 0){
			return(
				<div className="col-10 col-sm-12 col-xs-12 config_boxes_container">
					<div className="buttons_container">
						<p>total boxes: {this.props.numOfBoxes}</p>
						<p>Warning: Please allocate your total monthly income of <strong>{this.props.monthly}</strong> to your boxes</p>
						<p>Amount left: {this.props.monthly - this.props.total}</p>
					</div>
					<div className="row boxes_content">
						{ boxes.map((box)=>(<ConfigBox name={box.name} key={box.name} items={box.items} loadSpinner={this.props.loadSpinner}/>)) }
					</div>
				</div>
			)
		}

		return (
			<div className="col-10 col-sm-10 col-xs-12 config_boxes_container">
				<div className="buttons_container">
					<p>total boxes: {this.props.numOfBoxes}</p>
					<p>Monthly Income Allocated</p>
					<p>Amount left: {this.props.monthly - this.props.total}</p>
				</div>
				<div className="row boxes_content">
					{ boxes.map((box)=>(<ConfigBox name={box.name} key={box.name} items={box.items} loadSpinner={this.props.loadSpinner}/>)) }
				</div>
			</div>
		)
	}
}


const mapStateToProps = (state)=> {
	let totalInBoxes = 0;

	state.boxes.forEach((box)=>{
		box.items.forEach(item=>{
			totalInBoxes += Number(item.amount);
		})
	});

	return {
		numOfBoxes: state.boxes.length,
		total: totalInBoxes,
		monthly: new FormattedIncome(state.incomeDetails).getMonthlyIncome().toFixed(2)
	}
}

export default connect(mapStateToProps, null)(ConfigBoxes)
