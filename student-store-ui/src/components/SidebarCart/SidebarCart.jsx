// SidebarCart.jsx

import React from "react";

const SidebarCart = ({ cartItems, removeFromCart, taxRate }) => {
  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to calculate tax
  const calculateTax = () => {
    return calculateSubtotal() * taxRate;
  };

  // Function to calculate total
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary">
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="tax">
            <span>Tax:</span>
            <span>${calculateTax().toFixed(2)}</span>
          </div>
          <div className="total">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarCart;
