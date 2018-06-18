const getIncomeDetails = () => {
	return JSON.parse(localStorage.getItem('incomeDetails'));
}

const getBoxes = () => {
	return JSON.parse(localStorage.getItem('boxes'));
}

const addIncomeDetails = (details) => {
	localStorage.setItem('incomeDetails', JSON.stringify(details));
	return details;
}

const removeIncomeDetails = () => {
	localStorage.removeItem('incomeDetails');
}

const removeBoxes = () => {
	localStorage.removeItem('boxes');
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

const batchBoxes = (boxes) =>{
	boxes.forEach(box=>{
		const serverBoxes = getBoxes();
		console.log("server boxes", serverBoxes);
		if(!serverBoxes || serverBoxes.filter(serverBox => box.name !== serverBox.name))
			createBox(box.name);
		const boxItems = box.items;

		boxItems.forEach(item=>{
			addBoxItem(box.name, item.name, item.amount);
		})



	})
}



const deleteAllBoxes = () => {
	localStorage.removeItem('boxes');
}


const deleteBox = (name) => {
	const boxes = getBoxes();
	const filtered = boxes.filter((box)=>(box.name != name));
	if(filtered.length === 0)
		localStorage.removeItem('boxes');
	else
		localStorage.setItem('boxes', JSON.stringify(filtered));
	return name;
}

const addBoxItem = (boxName, name, amount) =>{
	const allboxes = JSON.parse(localStorage.getItem('boxes'));
	console.log("here at addBoxItems");

	const updatedBox = allboxes.map((item)=>{
		console.log("name passed is", boxName)
		console.log("box name is", item.name);
		if(item.name === boxName){
			console.log('box items')
			item.items = [
				...item.items,
				{
					name: name,
					amount: amount
				}
			]
		}

		return item
	});

	console.log("updated box", updatedBox);

	localStorage.setItem('boxes', JSON.stringify(updatedBox));

	return ({boxName, name, amount})

}

const deleteBoxItem = (boxName, itemName) =>{

	const allBoxes = getBoxes();
	const filtered = allBoxes.map((item)=>{
		if(item.name === boxName){
			const updatedItems = item.items.filter((subItem)=>subItem.name !== itemName);
			item.items = updatedItems;
			return item;
		}
		console.log("item", item);

		return item;
	});

	localStorage.setItem('boxes', JSON.stringify(filtered));
	return ({boxName, itemName})
}

const editBoxItem = (boxName, itemName, amount) => {
	const allBoxes = getBoxes();
	const filtered = allBoxes.map((item)=>{
		if(item.name === boxName){
			const updatedItems = item.items.map((subItem)=>{
				if(subItem.name === itemName)
					subItem.amount = amount

				return subItem
			})
			item.items = updatedItems;
		}

		return item;
	});

	localStorage.setItem('boxes', JSON.stringify(filtered));
	return ({boxName, itemName, amount});

}


export default { getBoxes, getIncomeDetails, createBox, deleteAllBoxes, addIncomeDetails, deleteBox, addBoxItem, deleteBoxItem, editBoxItem, batchBoxes, removeIncomeDetails, removeBoxes}