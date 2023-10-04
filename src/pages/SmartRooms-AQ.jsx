import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SmartRoomAQ = () => {
  const items = [
    "SR-AQ-KH00-01",
    "SR-AQ-KH00-02",
    "SR-AQ-KH03-00",
    "SR-AQ-KH03-01",
    "SR-AQ-KH03-02",
    "SR-AQ-KH03-03",
    "SR-AQ-KH95-00",
    "SR-AQ-VN01-00",
    "SR-AQ-VN01-01",
    "SR-AQ-VN01-02",
    "SR-AQ-KH95-01",
    "SR-AQ-KH95-02",
    "SR-AQ-KH95-03"
];

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const lazyLoadIframe = (item, index) => {
    if (index === currentSlide) {
      return (
        <iframe title="Smart Rooms Air Quality"
          src={`https://smartcityresearch.iiit.ac.in/grafana/d/f81d3e9d-84c6-43e5-a1e6-f4ba76b-sr-aq/smart-room-air-quality?kiosk&var-nodeid=${item}&orgId=1`}
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
        <h1 style={{ color: '#fff', padding: '20px' }}>Smart Rooms Air Quality</h1>
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
            <h3 style={{ color: 'white', textAlign: 'center' }}>{item}</h3>
            {lazyLoadIframe(item, index)}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SmartRoomAQ;
