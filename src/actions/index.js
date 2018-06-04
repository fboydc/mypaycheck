export const ADD_INCOME_DETAILS = 'ADD_INCOME_DETAILS'
export const GET_INCOME_DETAILS = 'GET_INCOME_DETAILS'
export const ADD_BOX = 'ADD_BOX'
export const GET_BOXES = 'GET_BOXES'
export const REMOVE_BOX = 'REMOVE_BOX'
export const ADD_BOX_ITEM = 'ADD_BOX_ITEM'
export const REMOVE_BOX_ITEM = 'REMOVE_BOX_ITEM'
export const EDIT_BOX_ITEM = 'EDIT_BOX_ITEM'






export const addIncomeDetails = ({annualIncome, filingStatus, payFrequency, federalAllownaces, pretaxDeductions, state, city}) => {
	return {
		type: ADD_INCOME_DETAILS,
		annualIncome,
		filingStatus,
		payFrequency,
		federalAllownaces,
		pretaxDeductions,
		state,
		city
	}
}

export const getIncomeDetails = ({annualIncome, payFrequency}) => {
	return {
		type: GET_INCOME_DETAILS,
		payFrequency
	}
}


export const addBox = ({name, items}) => {
	return {
		type: ADD_BOX,
		name,
		items
	}
}

export const getBoxes = (boxes)=>{
	return {
		type: GET_BOXES,
		boxes
	}
}

export const removeBox = ({name}) => {
	return {
		type: REMOVE_BOX,
		name
	}
}

export const addBoxItem = ({name, amount}) => {
	return {
		type: ADD_BOX_ITEM,
		name,
		amount
	}
}

export const removeBoxItem = ({name}) => {
	return {
		type: REMOVE_BOX_ITEM,
		name
	}
}

export const editBoxItem = ({name, amount}) => {
	return {
		type: EDIT_BOX_ITEM,
		name,
		amount
	}
}





