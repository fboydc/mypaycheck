const getBoxes = () => {
	return localStorage.getItem('boxes');
}

export default { getBoxes }