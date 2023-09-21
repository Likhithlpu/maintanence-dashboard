import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Energy = () => {
  const items = [
    "EM-NC-VN01-00",
    "EM-NC-VN01-01",
    "EM-NC-VN92-00",
    "EM-NC-VN93-00",
    // Add more items as needed
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleSelectItem = (item) => {
    const index = items.indexOf(item);
    if (sliderRef.current && index !== -1) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div style={{ maxWidth: '95%', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h1 style={{color: '#fff'}}>Energy Monitoring</h1>
        <select
          onChange={(e) => handleSelectItem(e.target.value)}
          style={{
            padding: '8px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#333', // Dark background color
            color: '#fff', // Text color
            cursor: 'pointer',
          }}
        >
          <option value="">Select an item</option>
          {items.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} style={{ textAlign: 'center', padding: '20px' }}>
            <h3>{item}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Energy;
