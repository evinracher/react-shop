import { useState } from 'react';

const initialState = {
  cart: []
};

const useAppState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product) => {
    setState({
      ...state,
      cart: [...state.cart, product]
    });
  };

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== indexValue)
    });
  };

  return { state, addToCart, removeFromCart };
};

export default useAppState;