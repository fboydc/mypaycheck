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

const incomeDetails = (state={}, action) => {
	switch(action.type){
		case GET_INCOME_DETAILS:
			//const { income } = action;
			return {
				...state,
				incomeDetails: {
					...action.incomeDetails
				}
			}
		default:
			return state;
	}
}

const boxes = (state={boxes:[]}, action) => {
	switch(action.type){
		case GET_BOXES:
			const {boxes} = action;
			console.log("boxes", boxes);
			return {
				...state,
				boxes: [...boxes]
			}
		case ADD_BOX: 
			const {name, items} = action;
			return {
				...state,
				boxes: [
					...state.boxes,
					{
						name: name,
						items: items
					}
				]
			}

		default:
			return state;
	}
}

export default combineReducers({
	incomeDetails,
	boxes
})