import React, {Component} from 'react';
import api from '../api';
import ConfigBox  from './ConfigBox';
import {connect} from 'react-redux';
import {getBoxes} from '../actions';


export default class ConfigBoxes extends Component {




	render(){
		const {boxes} = this.props;

		return (
			<div className="col-12 config_boxes_container">
				<div className="row buttons_container">
					<button className="button">delete all</button><button className="button">add</button>
				</div>
				<div className="row boxes_content">
					{ boxes.map((box)=>(<ConfigBox name={box.name} key={box.name} items={box.items}/>)) }
				</div>
			</div>
		)
	}
}



