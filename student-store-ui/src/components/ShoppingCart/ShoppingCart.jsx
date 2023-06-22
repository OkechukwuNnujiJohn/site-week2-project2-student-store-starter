import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CartButton = () => {
  return (
    <Link to="/sidebar" className="cart-button">
      My Cart
      <span className="cart-icon">
        <RiShoppingCartLine />
      </span>
    </Link>
  );
};

export default CartButton;
