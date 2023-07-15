import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CookingTips = () => {
  const tips = [
    {
      id: 1,
      title: 'Season your dishes properly',
      description: 'Proper seasoning is crucial to enhance the flavors of your dishes. Taste and adjust the seasoning with salt, pepper, herbs, and spices as you cook.',
    },
    {
      id: 2,
      title: 'Use a sharp knife',
      description: 'A sharp knife makes your prep work easier and safer. Keep your knives sharp and well-maintained for clean and precise cuts.',
    },
    {
      id: 3,
      title: 'Read the recipe thoroughly',
      description: 'Before you start cooking, read the entire recipe carefully. Understand the steps, ingredients, and cooking techniques to ensure successful results.',
    },
    {
      id: 4,
      title: 'Mise en place',
      description: 'Mise en place means having all your ingredients prepped and ready before you start cooking. Chop, measure, and organize your ingredients to streamline the cooking process.',
    },
    {
      id: 5,
      title: 'Taste as you go',
      description: 'Frequently taste your dishes while cooking. Adjust seasonings, flavors, and textures as needed to achieve a delicious and balanced outcome.',
    },
    {
      id: 6,
      title: 'Properly measure ingredients',
      description: 'Accurate measurement of ingredients is crucial for consistent results. Use measuring cups, spoons, or a kitchen scale to ensure precise measurements.',
    },
    {
      id: 7,
      title: 'Rest meat before slicing',
      description: 'Allow cooked meat to rest for a few minutes before slicing. This helps the juices redistribute, resulting in more tender and flavorful meat.',
    },
    {
      id: 8,
      title: 'Keep an organized kitchen',
      description: 'Maintain an organized kitchen by regularly cleaning and decluttering. This allows for efficient cooking and easy access to tools and ingredients.',
    },
    // Add more cooking tips and techniques as needed
  ];

  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">Cooking Tips and Techniques</h2>
        <Row>
          {tips.map((tip) => (
            <Col key={tip.id} md={6} lg={3} className="mb-4">
              <div className="p-3 bg-white shadow rounded">
                <h5 className="mb-3">{tip.title}</h5>
                <p>{tip.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CookingTips;
