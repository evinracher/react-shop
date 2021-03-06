import React, { useState, useContext } from 'react';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import AppContext from '../context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import '@styles/Header.scss';


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const { state: { cart } } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
          <li className="navbar-shopping-cart" onClick={() => setCheckout(!checkout)}>
            <img src={shoppingCart} alt="shopping cart" />
            <div>{cart.length}</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {checkout && <MyOrder />}
    </nav>
  );
};

export default Header;