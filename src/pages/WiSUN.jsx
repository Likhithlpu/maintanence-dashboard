import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wisun = () => {
  const items = [
    "WN-L001-03",
    "WN-L002-02",
    "WN-L003-02",
    "WN-L004-02",
    "WN-L005-02",
    "WN-L006-01",
    "WN-L007-01",
    "WN-L008-01",
    "WN-L009-01",
    "WN-L010-01",
    "WN-L011-01",
    "WN-L012-01",
    "WN-L013-01",
    "WN-L014-01",
    "WN-L015-01",
    "WN-L016-01",
    "WN-L017-01",
    "WN-L018-01",
    "WN-L019-01",
    "WN-L020-01",
    "WN-L021-01",
    "WN-L022-01",
    "WN-L023-01",
    "WN-L024-01",
    "WN-L025-01",
    "WN-L026-01",
    "WN-L027-01",
    "WN-L028-01",
    "WN-L029-01",
    "WN-L030-01",
"WN-L031-30", "WN-L032-30", "WN-L033-30", "WN-L034-30", "WN-L035-30", "WN-L036-30", "WN-L037-30", "WN-L038-20", 
"WN-L039-20", "WN-L040-20", "WN-L041-20", "WN-L042-20", "WN-L043-20", "WN-L044-20", "WN-L045-20", "WN-L046-20",
"WN-L047-20", "WN-L048-20", "WN-L049-20", "WN-L050-20", "WN-L051-20", "WN-L052-20", "WN-L053-20", "WN-L054-20", 
"WN-VA24-20", "WN-VA64-20", "WN-VC44-20", "WN-NI04-24", "WN-L059-24", "WN-OF04-34"];

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
        <iframe title="WiSUN"
          src={`https://smartcityresearch.iiit.ac.in/grafana/d/f81d3e9d-84c6-43e5-a1e6-f4ba76bbcf6b-wn/wi-sun?kiosk&var-nodeid=${item}&orgId=1`}
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
        <h1 style={{ color: '#fff', padding: '20px' }}>Wisun Monitoring</h1>
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

export default Wisun;
