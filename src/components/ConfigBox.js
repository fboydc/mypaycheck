import React, {Component} from 'react';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaTrash from 'react-icons/lib/fa/trash';
import {removeBox, addBoxItem} from '../actions';
import api from '../api';
import {connect} from 'react-redux';
import {NotificationManager} from 'react-notifications';
import Modal from 'react-modal';
import BoxItem from './BoxItem';


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

class ConfigBox extends Component {

	constructor(){
		super();
		this.state = {
			open: false,
			name: '',
			amount: ''
		}
	}


	deleteBox = ()=>{
		console.log(this.props);
		this.props.loadSpinner();
		setTimeout(()=>{
			this.props.deleteItem(this.props.name);
			this.props.loadSpinner();
			NotificationManager.success('box deleted');
		}, 1000)
	}


	toggleNewItemModal = ()=>{
		this.setState({open: !this.state.open});
	}

	handleNameChange = ()=>{
		this.setState({name: this.itemName.value});
	}

	handleAmountChange = ()=>{
		this.setState({amount: this.itemAmount.value});
	}

	addItem = ()=> {
		if(this.state.name === '' || this.state.amount === ''){
			NotificationManager.error('One or more empty fields');
			return
		}

		this.props.loadSpinner();
		setTimeout(()=>{
			this.props.addItem(this.props.name, this.state.name, this.state.amount);
			this.setState({name: '', amount: ''});
			this.toggleNewItemModal();
			this.props.loadSpinner();
			NotificationManager.success('item added');

		}, 1000);

	}



	render(){
		const {name, items} = this.props
		console.log("items", items);
		if(items.length > 0){
			return (
					<div className="col-5 col-sm-8 col-xs-12 config-box">
						<div className="row config-box-header">
							<span className="col-6 col-sm-6 col-xs-6 box-title-container">{name}</span>
							<span className="col-6 col-sm-6 col-xs-6 box-buttons-container">
								<span><button className="config_box_button" onClick={this.toggleNewItemModal}><FaPlusCircle /></button></span>
								<span><button className="config_box_button" onClick={this.deleteBox}><FaTrash /></button></span>
							</span>
						</div>
						<div className="row box-content">
							<div className="row boxitem_item">
								<p className="col-4 col-sm-4 col-xs-4">Detail</p>
								<p className="col-4 col-sm-4 col-xs-4">Amount</p>
							</div>
							{ items.map((item)=><BoxItem boxName={name} name={item.name} amount={item.amount} key={item.name} spinner={this.props.loadSpinner}/>)}
							<hr/>
						</div>
						<Modal isOpen={this.state.open} style={customStyles} onRequestClose={this.toggleNewItemModal} className="modal">
							<div className="modal-close-button">
								<button onClick={this.toggleNewItemModal}>x</button>
							</div>
							<h3>
								Add Item
							</h3>
							<div className="modal-input-row">
								<div className="modal-label">
									<label>Name</label>
								</div>
								<div className="modal-input-container">
									<input type="text" className="input modal-input" ref={(input)=>{this.itemName = input}} value={this.state.name} onChange={this.handleNameChange}/>
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
							<div className="row modal-input-row modal-button-container">
									<button className="button" onClick={this.addItem}>Save</button>
							</div>
						</Modal>
					</div>
				)

		}else{
			return (
				<div className="col-5 col-sm-8 col-xs-12 config-box">
					<div className="row config-box-header">
						<span className="col-6 col-sm-6 col-xs-6 box-title-container">{name}</span>
						<span className="col-6 col-sm-6 col-xs-6 box-buttons-container">
							<span><button className="config_box_button" onClick={this.toggleNewItemModal}><FaPlusCircle /></button></span>
							<span><button className="config_box_button" onClick={this.deleteBox}><FaTrash /></button></span>
						</span>
					</div>
					<div className="row box-content">
						<p>No box items configured.</p>
					</div>
					<Modal isOpen={this.state.open} style={customStyles} onRequestClose={this.toggleNewItemModal} className="modal">
						<div className="modal-close-button">
							<button onClick={this.toggleNewItemModal}>x</button>
						</div>
						<h3>
							Add Item
						</h3>
						<div className="modal-input-row">
							<div className="modal-label">
								<label>Name</label>
							</div>
							<div className="modal-input-container">
								<input type="text" className="input modal-input" ref={(input)=>{this.itemName = input}} value={this.state.name} onChange={this.handleNameChange}/>
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
						<div className="row modal-input-row modal-button-container">
								<button className="button" onClick={this.addItem}>Save</button>
						</div>
					</Modal>
				</div>

			)
		}

	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		deleteItem: (name)=>{dispatch(removeBox(api.deleteBox(name)))},
		addItem: (box, name, amount)=>{dispatch(addBoxItem(api.addBoxItem(box, name, amount)))}
	}
}

export default connect(null, mapDispatchToProps)(ConfigBox)