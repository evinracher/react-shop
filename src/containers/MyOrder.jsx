import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import arrowIcon from '@icons/arrow.svg';
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const { state: { cart } } = useContext(AppContext);
	console.log(cart);
	const total = cart.reduce((accumulator, currentItem,) => accumulator + currentItem.price, 0);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrowIcon} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{cart.map(item => <OrderItem key={`order-item-${item.id}`} product={item} />)}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${total}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
};

export default MyOrder;
