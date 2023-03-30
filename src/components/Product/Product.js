import React from "react";
import "./Product.css"

const Product = (props) => {
	const { product, color, price } = props.product;
	return (
		<div className="product">
			<h3>Product Name: {product}</h3>
			<p>Price: {price}$</p>
			<p>Color: {color}</p>
		</div>
	);
};

export default Product;
