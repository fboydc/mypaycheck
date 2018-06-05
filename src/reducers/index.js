import { combineReducers } from 'redux';
import {
	ADD_INCOME_DETAILS,
	GET_INCOME_DETAILS,
	ADD_BOX,
	GET_BOXES,
	REMOVE_BOX,
	ADD_BOX_ITEM,
	REMOVE_BOX_ITEM,
	EDIT_BOX_ITEM
} from '../actions'

const incomeDetails = (state = {}, action) => {
	switch(action.type){
		case GET_INCOME_DETAILS:{
			const { annualIncome, filingStatus, payFrequency, federalAllowances, pretaxDeductions, state, city } = action;
			return {
					annualIncome: annualIncome,
					filingStatus: filingStatus,
					payFrequency: payFrequency,
					federalAllowances: federalAllowances,
					pretaxDeductions: pretaxDeductions,
					state: state,
					city: city
			}
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
		case GET_BOXES:{
					if(action.boxes){
						return [...action.boxes]
					}
					return state
				}

		default:
			return state;
	}
}

export default combineReducers({
	incomeDetails,
	boxes
})