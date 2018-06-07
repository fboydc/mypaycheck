import React, {Component} from 'react';
import api from '../api';
import ConfigBox  from './ConfigBox';
import {connect} from 'react-redux';
import {getBoxes} from '../actions';


class ConfigBoxes extends Component {




	render(){
		const {boxes} = this.props;

		return (
			<div className="col-12 col-sm-10 col-xs-10 config_boxes_container">
				<div className="row buttons_container">
					total boxes: {this.props.numOfBoxes}
				</div>
				<div className="row boxes_content">
					{ boxes.map((box)=>(<ConfigBox name={box.name} key={box.name} items={box.items} loadSpinner={this.props.loadSpinner}/>)) }
				</div>
			</div>
		)
	}
}


const mapStateToProps = (state)=> {
	return {
		numOfBoxes: state.boxes.length
	}
}

export default connect(mapStateToProps, null)(ConfigBoxes)
