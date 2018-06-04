const getIncomeDetails = () => {
	return localStorage.getItem('incomeDetails');
}

const getBoxes = () => {
	return JSON.parse(localStorage.getItem('boxes'));
}


const createBox = (name) =>{
	//console.log(name);
	const boxes = localStorage.getItem('boxes');
	//console.log(boxes);
	if(boxes){
		const boxes = [...boxes, {name: name, items: []}]
		return localStorage.setItem('boxes', JSON.stringify(boxes));
	}else{
		const boxes = [{name: name, items: []}] 
		return localStorage.setItem('boxes', JSON.stringify(boxes));
	}
	
}

const deleteAllBoxes = () => {
	localStorage.removeItem('boxes');
}


export default { getBoxes, getIncomeDetails, createBox, deleteAllBoxes}