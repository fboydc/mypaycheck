import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import {addBox} from '../actions';
import api from '../api';
import {connect} from 'react-redux';


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
		const box = api.createBox(this.state.boxName)
		this.props.createBox(box);
	}


	render(){
		return (
			<div className="col-6 new_box_form">
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
	}
}

const mapStateToProps = (state) => {
	return {
		boxes: state.boxes.entries
	}
}



const mapDispatchToProps = (dispatch)=> {
	return {
		createBox: (box) => dispatch(addBox(box))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(NewBox)