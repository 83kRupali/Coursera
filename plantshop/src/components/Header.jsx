import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#cde' }}>
      <h1>Plant Shop</h1>
      <nav>
        <Link to="/products" style={{ marginRight: '20px' }}>Products</Link>
        <Link to="/cart">
          🛒 {totalItems}
        </Link>
      </nav>
    </header>
  );
}
