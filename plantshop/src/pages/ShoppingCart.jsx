import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, deleteItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  const { items, totalItems, totalCost } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) return (
    <div>
      <h2>Your cart is empty</h2>
      <Link to="/products">Continue Shopping</Link>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>

      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
