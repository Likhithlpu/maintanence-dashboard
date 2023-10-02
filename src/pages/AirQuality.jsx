import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Air = () => {
  const items = [
    "AQ-AN00-00",
    "AQ-FG00-00",
    "AQ-KN00-00",
    "AQ-PH03-00",
    "AQ-SN00-00",
    "AQ-PH04-00",
    "AQ-KH00-00",
    "AQ-MG00-00",
    "AQ-PL00-00",
    "AQ-VN90-00" 
    // Add more items as needed
  ];

  const sliderRef = useRef(null);
  const iframeHeight = '80vh'; // Adjust the height as needed

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

  useEffect(() => {
    // Adjust iframe height when the window is resized
    const handleResize = () => {
      if (sliderRef.current) {
        const iframe = sliderRef.current.innerSlider.list.querySelector('iframe');
        if (iframe) {
          iframe.style.height = iframeHeight;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const iframeContainerHeight = '780px'; 

  return (
    <div style={{ maxWidth: '95%', margin: '0 auto'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h1 style={{ color: '#fff', padding: '20px' }}>Air Quality</h1>
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
          <div key={index} style={{ textAlign: 'center', padding: '20px'}}>
            {/* <h3>{item}</h3> */}
            <iframe src={`https://smartcityresearch.iiit.ac.in/grafana/d/f81d3e9d-84c6-43e5-a1e6-f4ba76bbcf6b/air-quality?kiosk&var-nodeid=${item}&orgId=1`} width="100%" height='600px' style={{height: iframeContainerHeight}}></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Air;
