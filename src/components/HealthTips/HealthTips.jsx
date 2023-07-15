import React from 'react';
import './HealthTips.css';

const HealthTips = () => {
  // Sample array of health tips
  const tips = [
    {
      id: 1,
      title: 'Stay Hydrated',
      description: 'Drink plenty of water throughout the day to stay hydrated. It helps maintain overall health and supports bodily functions.',
    },
    {
      id: 2,
      title: 'Eat a Balanced Diet',
      description: 'Consume a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats to ensure a balanced diet.',
    },
    {
      id: 3,
      title: 'Get Regular Exercise',
      description: 'Engage in regular physical activity to improve cardiovascular health, strengthen muscles, and boost mood.',
    },
    {
      id: 4,
      title: 'Prioritize Sleep',
      description: 'Make sure to get enough quality sleep each night to promote mental and physical well-being.',
    },
    // Add more health tips as needed
  ];

  return (
    <div>
      <h2 className="text-center mb-4">Health Tips</h2>
      <div className="health-tips">
        {tips.map((tip) => (
          <div key={tip.id} className="health-tip">
            <h3 className="tip-title">{tip.title}</h3>
            <p className="tip-description">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
