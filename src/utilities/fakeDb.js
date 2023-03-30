// Use local storage to manage cart data
const addToDb = (id) => {
	let shoppingCart;
	// get the shopping Cart
	const storedCart = localStorage.getItem("_cart");
	if (storedCart) {
		shoppingCart = JSON.parse(storedCart);
	} else {
		shoppingCart = {};
	}
	// add quantity
	const quantity = shoppingCart[id];

	if (quantity) {
		const newQuantity = quantity + 1;
		shoppingCart[id] = newQuantity;
	} else {
		shoppingCart[id] = 1;
	}
	localStorage.setItem("_cart", JSON.stringify(shoppingCart));
};

export { addToDb };