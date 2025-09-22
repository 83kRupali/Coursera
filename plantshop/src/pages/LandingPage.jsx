import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/plantshop.jpg';

export default function LandingPage() {
  return (
    <div style={{ textAlign: 'center', backgroundImage: `url(${bg})`, height: '100vh', color: 'white', paddingTop: '20vh' }}>
      <h1>Welcome to Plant Shop</h1>
      <p>Your one-stop destination for indoor plants.</p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>Get Started</button>
      </Link>
    </div>
  );
}
