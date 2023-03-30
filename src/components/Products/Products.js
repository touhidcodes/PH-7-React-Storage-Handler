import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("fakeData.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div>
            <h1>Welcome to Shopping Cart</h1>
			<div className='products'>
				{products.map((product) => (
					<Product key={product.id} product={product}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
