import React, {Component} from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import FaPencil from 'react-icons/lib/fa/pencil';
import {connect} from 'react-redux';
import api from '../api';
import {removeBoxItem, editBoxItem} from '../actions';
import {NotificationManager} from 'react-notifications';
import Modal from 'react-modal';



const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '25px',
	}
}

class BoxItem extends Component {

	constructor(props){
		super(props);
		console.log("props", props);
		this.state = {
			open: false,
			name: this.props.name,
			amount: this.props.amount		}
	}

	deleteItem = ()=>{
		this.props.spinner();
		setTimeout(()=>{
			this.props.deleteItem(this.props.boxName, this.props.name);
			this.props.spinner();
			NotificationManager.success('item deleted succesfully');
		}, 1000)
	}


	toggleEditItemModal = ()=>{
		this.setState({open: !this.state.open});
	}

	handleNameChange = ()=>{
		this.setState({name: this.itemName.value});
	}

	handleAmountChange = ()=>{
		this.setState({amount: this.itemAmount.value});
	}

	editItem = ()=>{
		if(this.state.amount === ''){
			NotificationManager.error('Amount not specified');
			return;
		}

		this.props.spinner();
		setTimeout(()=>{
			this.props.editItem(this.props.boxName, this.props.name, this.state.amount);
			this.props.spinner();
			this.toggleEditItemModal();
			NotificationManager.success('item edited succesfully');
		}, 1000)

	}

	render(){
		const {amount, name} = this.props;
		return (
			<div className="row boxitem_item">
				<p className="col-4 col-sm-4 col-xs-4">{name}</p>
				<p className="col-4 col-sm-4 col-xs-4">{amount}</p>
				<span className="col-4 col-sm-4 col-xs-4">
					<button className="config_box_button_inverse"><FaTrash onClick={this.deleteItem}/></button>
					<button className="config_box_button_inverse"><FaPencil onClick={this.toggleEditItemModal}/></button>
				</span>
				<Modal isOpen={this.state.open} style={customStyles} onRequestClose={this.toggleEditItemModal} className="modal">
					<div className="modal-close-button">
						<button onClick={this.toggleEditItemModal}>x</button>
					</div>
					<h3>
						Edit Item
					</h3>
					<div className="modal-input-row">
						<div className="modal-label">
							<label>Name</label>
						</div>
						<div className="modal-input-container">
							<input type="text" className="input modal-input" ref={(input)=>{this.itemName = input}} value={this.state.name} onChange={this.handleNameChange} disabled/>
						</div>
					</div>
					<div className="modal-input-row">
						<div className="modal-label">
							<label>Amount</label>
						</div>
						<div className="modal-input-container">
							<input type="number" className="input modal-input" ref={(input)=>{this.itemAmount = input}} value={this.state.amount} onChange={this.handleAmountChange}/>
						</div>
					</div>
					<div className="modal-input-row modal-button-container">
							<button className="button" onClick={this.editItem}>Save</button>
					</div>
				</Modal>
			</div>

		)
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		deleteItem: (boxName, name)=>dispatch(removeBoxItem(api.deleteBoxItem(boxName, name))),
		editItem: (boxName, name, amount)=>dispatch(editBoxItem(api.editBoxItem(boxName, name, amount)))
	}
}

export default connect(null, mapDispatchToProps)(BoxItem)


