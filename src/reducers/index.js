import { combineReducers } from 'redux';
import {
	ADD_INCOME_DETAILS,
	GET_INCOME_DETAILS,
	REMOVE_INCOME_DETAILS,
	ADD_BOX,
	ADD_BOXES,
	GET_BOXES,
	REMOVE_BOX,
	REMOVE_BOXES,
	ADD_BOX_ITEM,
	REMOVE_BOX_ITEM,
	EDIT_BOX_ITEM
} from '../actions'

const incomeDetails = (state = {}, action) => {
	switch(action.type){
		case GET_INCOME_DETAILS:{
			const { annualIncome, filingStatus, frequency, federalAllowances, pretaxDeductions, state, city } = action;
			return {
					annualIncome: annualIncome,
					filingStatus: filingStatus,
					frequency: frequency,
					federalAllowances: federalAllowances,
					pretaxDeductions: pretaxDeductions,
					state: state,
					city: city
			}
		}
		case REMOVE_INCOME_DETAILS: {
			return {}
		}
		default:
			return state;
	}
}

const boxes = (state = [], action) => {

	switch(action.type){
		case ADD_BOX:{
			const {name, items} = action;
			return [
					...state,
						{
							name: name,
							items: items
						}

					]
		}

		case ADD_BOXES: {
			const {boxes} = action;

			return [
				...state,
				...boxes.map(box=>{
					return {
						name: box.name,
						items: [
							...box.items
						]
					}
				})
			]
		}

		case GET_BOXES:{
					if(action.boxes){
						return [...action.boxes]
					}
					return state
				}
		case REMOVE_BOX: {
			return state.filter((box)=>box.name != action.name)
		}

		case REMOVE_BOXES: {
			return []
		}
		case ADD_BOX_ITEM: {
			const { boxName, name, amount } = action;
			return state.map((item)=>{
				if(item.name === boxName){
					item.items = [
						...item.items,
						{
							name: name,
							amount: amount
						}
					]

				}

				return item
			})
		}

		case REMOVE_BOX_ITEM: {
			const {boxName, itemName} = action;
			return state.map((item)=>{
				if(item.name === boxName){
					const updatedItems = item.items.filter((subItem)=>subItem.name != itemName);
					item.items = updatedItems;
				}

				return item;
			})
		}

		case EDIT_BOX_ITEM: {
			const { boxName, itemName, amount} = action;
			return state.map((item)=>{
				if(item.name === boxName){
					const updatedItems = item.items.map((subItem)=>{
						if(subItem.name === itemName)
							subItem.amount = amount
						return subItem
					})

					item.items = updatedItems;
				}
				return item;
			})
		}

		default:
			return state;
	}
}




export default combineReducers({
	incomeDetails,
	boxes
})