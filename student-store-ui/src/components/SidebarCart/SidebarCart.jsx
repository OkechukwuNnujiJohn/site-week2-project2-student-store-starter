import React from "react";

const SidebarCart = ({ cartItems, removeFromCart }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div>
      <h2>Sidebar Cart</h2>
      {cartItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Subtotal</td>
              <td>${subtotal}</td>
            </tr>
            <tr>
              <td colSpan="2">Tax (10%)</td>
              <td>${tax}</td>
            </tr>
            <tr>
              <td colSpan="2">Total</td>
              <td>${total}</td>
            </tr>
            </tfoot>
        </table>
        ) : (
        <p>Your shopping cart is empty.</p>
        )}
        </div>
        );
        };

export default SidebarCart;
