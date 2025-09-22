import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart(plant));
    setAdded(true);
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', width: '150px' }}>
      <img src={plant.image} alt={plant.name} style={{ width: '100%' }} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAdd} disabled={added}>
        {added ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
