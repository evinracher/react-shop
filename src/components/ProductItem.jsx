import React, { useState } from 'react';
import addToCartIcon from "@icons/bt_add_to_cart.svg";
import '../styles/ProductItem.scss';

const ProductItem = ({ product }) => {
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		const newCart = [...cart];
		setCart(newCart);
	};

	return (
		<div className="ProductItem">
			{/* <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
			<img src={product.images[0]} alt={product.price} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={addToCartIcon} alt="add-to-cart" />
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
