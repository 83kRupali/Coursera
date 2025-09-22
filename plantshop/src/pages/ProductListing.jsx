import React from 'react';
import PlantCard from '../components/PlantCard';
import { plants } from '../data/plantsData';

export default function ProductListing() {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: '20px' }}>
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            {plants.filter(p => p.category === cat).map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
