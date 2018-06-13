import React, {Component} from 'react';
import {connect} from 'react-redux';
import Box from './Box';

class Boxes extends Component {

	render(){
		return(
			<div className="col-10 col-sm-10 col-xs-11 boxes">
				{this.props.boxes.map((box)=><Box box={box} key={box.name}/>)}
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		boxes: state.boxes
	}
}

export default connect(mapStateToProps, null)(Boxes)