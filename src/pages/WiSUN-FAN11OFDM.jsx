import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'; // Import Axios for API requests


const api = axios.create({
  // baseURL: 'http://localhost:5002', // Replace with your actual backend URL
  baseURL: 'https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard-api'
});
const WisunFan11OFDM = () => {
  const items = [
    "WN-L038-20", 
    "WN-L039-20", 
    "WN-L040-20", 
    "WN-L041-20", 
    "WN-L042-20", 
    "WN-L043-20", 
    "WN-L044-20", 
    "WN-L045-20", 
    "WN-L046-20",
    "WN-L047-20", 
    "WN-L048-20", 
    "WN-L049-20", 
    "WN-L050-20", 
    "WN-L051-20", 
    "WN-L052-20", 
    "WN-L053-20", 
    "WN-L054-20", 
    "WN-VA24-20", 
    "WN-VA64-20", 
    "WN-VC44-20", 
    "WN-NI04-24", 
    "WN-L059-24", ];


const sliderRef = useRef(null);
const [currentSlide, setCurrentSlide] = useState(0);
const [status, setStatus] = useState('Active'); // State for status

const iframeHeight = '80vh'; // Adjust the height as needed
const iframeContainerHeight = '780px';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
};

const handleSelectItem = (item) => {
  const index = items.indexOf(item);
  if (sliderRef.current && index !== -1) {
    sliderRef.current.slickGoTo(index);
  }
};

const fetchData = async () => {
  try {
    // Use Axios or your preferred library to send a request to your server
    const response = await api.get(`/api/status?nodeid=${items[currentSlide]}`);
    setStatus(response.data.status);
  } catch (error) {
    console.error('Error fetching status:', error);
    // Handle errors as needed
  }
};

useEffect(() => {
  // Fetch the initial status
  fetchData();

  // Adjust iframe height when the window is resized
  const handleResize = () => {
    if (sliderRef.current) {
      const iframe = sliderRef.current.innerSlider.list.querySelector('iframe');
      if (iframe) {
        iframe.style.height = iframeHeight;
      }
    }
  };

  const handleArrowKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      // Navigate to the previous slide when the left arrow key is pressed
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    } else if (event.key === 'ArrowRight') {
      // Navigate to the next slide when the right arrow key is pressed
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }
  };

  // Add event listeners for arrow key presses
  window.addEventListener('keydown', handleArrowKeyPress);


  window.addEventListener('resize', handleResize);
  handleResize();

  return () => {
    window.removeEventListener('keydown', handleArrowKeyPress);
    window.removeEventListener('resize', handleResize);
  };
}, [currentSlide, fetchData]);

const lazyLoadIframe = (item, index) => {
  const vertical='WN FAN11OFDM'
  const datatable='data_wisunnodesdatalatest'
  if (status === 'Inactive') {
    return (
        <iframe
          title="WiSUN Analytics"
          src={`https://smartcitylivinglab.iiit.ac.in/grafana/d/ca895582-79c6-4b57-b95c-17135ff82b44/inactive-dashboard?kiosk&refresh=5s&var-nodeid=${item}&var-nodeid=${vertical}&var-datatable=${datatable}&orgId=1`}
          width="100%"
          height={iframeContainerHeight}
          style={{ height: iframeContainerHeight }}
        ></iframe>
    );
  } else if (index === currentSlide) {
    return (
      <iframe
        title="WiSUN Analytics"
        src={`https://smartcitylivinglab.iiit.ac.in/grafana/d/nodestatus/node-status?orgId=1&kiosk&refresh=5s&var-nodeid=${item}&var-tablename=${datatable}`}
        width="100%"
        height={iframeContainerHeight}
        style={{ height: iframeContainerHeight }}
      ></iframe>
    );
  } else {
    return null; // Render nothing for non-visible iframes
  }
};

return (
  <div style={{ maxWidth: '95%', margin: '0 auto' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
      <h1 style={{ color: '#fff', padding: '50px 20px 0px 0px' }}>WiSUN</h1>
      <select
        onChange={(e) => handleSelectItem(e.target.value)}
        style={{
          padding: '10px 10px 0px 0px',
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
        <div key={index} style={{ textAlign: 'center', padding: '0px' }}>
          <h3 style={{ color: 'white', textAlign: 'center' }}>{item}</h3>
          {lazyLoadIframe(item, index)}
        </div>
      ))}
    </Slider>
  </div>
);
};

export default WisunFan11OFDM;
