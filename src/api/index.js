const getIncomeDetails = () => {
	return JSON.parse(localStorage.getItem('incomeDetails'));
}

const getBoxes = () => {
	return JSON.parse(localStorage.getItem('boxes'));
}

const addIncomeDetails = (details) => {
	localStorage.setItem('incomeDetails', JSON.stringify(details));
}

const createBox = (name) =>{

	let boxes = JSON.parse(localStorage.getItem('boxes'));

	const newBox = {name: name, items:[]}
	if(boxes){
		boxes = [...boxes, newBox];
		localStorage.setItem('boxes', JSON.stringify(boxes));
	}else{
		const boxes = [newBox]
		localStorage.setItem('boxes', JSON.stringify(boxes));
	}

	return newBox;

}

const deleteAllBoxes = () => {
	localStorage.removeItem('boxes');
}


export default { getBoxes, getIncomeDetails, createBox, deleteAllBoxes, addIncomeDetails}