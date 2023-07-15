import React from 'react';
import "./SeasonalSpecials.css"

const SeasonalSpecials = () => {
  // Sample seasonal data for each season
  const seasonalData = {
    spring: [
      {
        id: 1,
        name: 'Mango Lassi',
        image: 'mango-lassi.jpg',
        description: 'A refreshing drink made with fresh mangoes and yogurt.',
      },
      {
        id: 2,
        name: 'Panta Bhat',
        image: 'panta-bhat.jpg',
        description: 'Fermented rice served with various side dishes, popular during the Bengali New Year.',
      },
      // Add more spring seasonal specials as needed
    ],
    summer: [
      {
        id: 3,
        name: 'Bhapa Ilish',
        image: 'https://petpujobengali.com/wp-content/uploads/2023/03/IMG_20230308_112321.jpg',
        description: 'Steamed Hilsa fish cooked with mustard and served with rice.',
      },
      {
        id: 4,
        name: 'Mango Chutney',
        image: 'https://www.daringgourmet.com/wp-content/uploads/2013/03/Mango-Chutney-2-square-edit-scaled.jpg',
        description: 'A sweet and tangy condiment made with ripe mangoes.',
      }
    ],
    autumn: [
      {
        id: 5,
        name: 'Khichuri',
        image: 'khichuri.jpg',
        description: 'A hearty dish made with rice, lentils, and various spices.',
      },
      {
        id: 6,
        name: 'Nolen Gur Payesh',
        image: 'nolen-gur-payesh.jpg',
        description: 'Rice pudding flavored with jaggery made from date palm sap.',
      },
      // Add more autumn seasonal specials as needed
    ],
    winter: [
      {
        id: 7,
        name: 'Pitha',
        image: 'pitha.jpg',
        description: 'Traditional Bengali rice cakes made in various styles and flavors.',
      },
      {
        id: 8,
        name: 'Narkel Naru',
        image: 'narkel-naru.jpg',
        description: 'Coconut sweet balls made with grated coconut and jaggery.',
      },
      // Add more winter seasonal specials as needed
    ],
  };

  // Get the current month
  const currentMonth = new Date().getMonth() + 1;

  // Determine the current season based on the month
  let currentSeason = '';
  if (currentMonth >= 3 && currentMonth <= 5) {
    currentSeason = 'spring';
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    currentSeason = 'summer';
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    currentSeason = 'autumn';
  } else {
    currentSeason = 'winter';
  }

  // Get the seasonal specials based on the current season
  const seasonalSpecials = seasonalData[currentSeason];

  return (
    <section className=' container my-5'>
      <h2 className='text-center mb-4 fw-bold'>Seasonal Specials</h2>
      <div className='d-flex align-items-center justify-center gap-5 recipes'>
        <div className='d-flex align-items-center justify-center gap-4 recipe'>
          <div className='description'>
            <h4>Bhapa Ilish</h4>
            <p>Steamed Hilsa fish cooked with mustard and served with rice.</p>
            <button className='btn btn-primary fw-bold'>Order Now</button>
          </div>
          <img src="https://petpujobengali.com/wp-content/uploads/2023/03/IMG_20230308_112321.jpg" alt="" />
        </div>
        <div className='d-flex align-items-center justify-center gap-4 recipe'>
          <div className='description'>
            <h4>Mango Chutney</h4>
            <p>A sweet and tangy condiment made with ripe mangoes.</p>
            <button className='btn btn-primary fw-bold'>Order Now</button>
          </div>
          <img src="https://www.daringgourmet.com/wp-content/uploads/2013/03/Mango-Chutney-2-square-edit-scaled.jpg" alt="" />
        </div>
      </div>

    </section>
  );
};

export default SeasonalSpecials;
