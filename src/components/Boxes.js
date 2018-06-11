import React, {Component} from 'react';
import {connect} from 'react-redux';
import Box from './Box';

class Boxes extends Component {

	render(){
		return(
			<div className="col-offset-2 col-offset-sm-2 col-offset-xs-2 col-8 col-sm-8 col-xs-8 boxes">
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