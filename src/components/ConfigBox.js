import React, {Component} from 'react';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaTrash from 'react-icons/lib/fa/trash';


export default class ConfigBox extends Component {

	render(){
		const {name, items} = this.props
		if(items.length > 0){

		}else{
			return (
				<div className="col-5 config-box">
					<div className="row config-box-header">
						<span className="col-6 box-title-container">{name}</span>
						<span className="col-6 box-buttons-container">
							<span><button className="config_box_button"><FaPlusCircle /></button></span>
							<span><button className="config_box_button"><FaTrash /></button></span>
						</span>
					</div>
					<div className="row box-content">
						<p>No box items configured.</p>
					</div>
				</div>
			)
		}

	}
}