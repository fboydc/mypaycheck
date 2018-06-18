export const ADD_INCOME_DETAILS = 'ADD_INCOME_DETAILS'
export const GET_INCOME_DETAILS = 'GET_INCOME_DETAILS'
export const REMOVE_INCOME_DETAILS = 'REMOVE_INCOME_DETAILS'
export const ADD_BOX = 'ADD_BOX'
export const ADD_BOXES = 'ADD_BOXES'
export const GET_BOXES = 'GET_BOXES'
export const REMOVE_BOXES = 'REMOVE_BOXES'
export const REMOVE_BOX = 'REMOVE_BOX'
export const ADD_BOX_ITEM = 'ADD_BOX_ITEM'
export const REMOVE_BOX_ITEM = 'REMOVE_BOX_ITEM'
export const EDIT_BOX_ITEM = 'EDIT_BOX_ITEM'







export const addIncomeDetails = ({annualIncome, filingStatus, payFrequency, federalAllowances, pretaxDeductions, state, city}) => {
	return {
		type: ADD_INCOME_DETAILS,
		annualIncome,
		filingStatus,
		payFrequency,
		federalAllowances,
		pretaxDeductions,
		state,
		city
	}
}

export const getIncomeDetails = ({annualIncome, filingStatus, frequency, federalAllowances, pretaxDeductions, state, city}) => {
	return {
		type: GET_INCOME_DETAILS,
		annualIncome,
		filingStatus,
		frequency,
		federalAllowances,
		pretaxDeductions,
		state,
		city
	}
}

export const removeIncomeDetails = ()=> {
	return {
		type: REMOVE_INCOME_DETAILS
	}
}


export const addBox = ({name, items}) => {
	return {
		type: ADD_BOX,
		name,
		items
	}
}

export const addBoxes = (boxes) => {
	return {
		type: ADD_BOXES,
		boxes
	}
}

export const removeBoxes = ()=>{
	return {
		type: REMOVE_BOXES
	}
}

export const getBoxes = (boxes)=>{
	return {
		type: GET_BOXES,
		boxes
	}
}

export const removeBox = (name) => {
	return {
		type: REMOVE_BOX,
		name
	}
}

export const addBoxItem = ({boxName, name, amount}) => {
	return {
		type: ADD_BOX_ITEM,
		boxName,
		name,
		amount
	}
}

export const removeBoxItem = ({boxName, itemName}) => {
	return {
		type: REMOVE_BOX_ITEM,
		boxName,
		itemName
	}
}

export const editBoxItem = ({boxName, itemName, amount}) => {
	return {
		type: EDIT_BOX_ITEM,
		boxName,
		itemName,
		amount
	}
}








