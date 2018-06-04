import React, {Component} from 'react';
import api from '../api';
import {connect} from 'react-redux';
import {getBoxes} from '../actions';


class ConfigBoxes extends Component {

	componentDidMount(){
		//api.deleteAllBoxes();
		const boxes = api.getBoxes();
		console.log(boxes);
		this.props.getBoxes(api.getBoxes());
	}


	render(){
		return (	
			<div className="col=offset-3 col-6">
				
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		boxes: state.boxes
	}
}

const mapDispatchToProps = (dispatch)=> {
	return {
		getBoxes: (boxes)=>dispatch(getBoxes(boxes))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigBoxes);

