import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const sidebarNavItems = [
    {
        display: 'Overview',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Air Quality - AQ',
        icon: <i className='bx bx-wind'></i>,
        to: '/aq',
        section: 'aq'
    },

    {
        display: 'Energy Monitoring - EM',
        icon: <i className='bx bx-plug'></i>,
        to: '/em',
        section: 'em'
    },
    
    {
        display: 'Solar - SL',
        icon: <i className='bx bx-sun'></i>,
        to: '/sl',
        section: 'sl'
    },
    {
        display: 'Smart Rooms - SR',
        icon: <i className='bx bx-building-house'></i>,
        to: '/sr',
        section: 'sr'
    },
    {
        display: 'Weather Monitoring - WE',
        icon: <i className='bx bx-cloud-lightning'></i>,
        to: '/we',
        section: 'we'
    },
    {
        display: 'Water Monitoring - WM',
        icon: <i className='bx bx-water'></i>,
        to: '/wm',
        section: 'wm'
    },
    {
        display: 'WiSUN - WN',
        icon: <i className='bx bx-bulb'></i>,
        to: '/wn',
        section: 'wn'
    },
    {
        display: 'Crowd Monitoring - CM',
        icon: <i className='bx bx-child'></i>,
        to: '/cm',
        section: 'cm'
    }
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
    <div className="sidebar__logo">
        SCRC - Verticals
    </div>
    <div ref={sidebarRef} className="sidebar__menu">
        <div
            ref={indicatorRef}
            className="sidebar__menu__indicator"
            style={{
                transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
            }}
        ></div>
        {
            sidebarNavItems.map((item, index) => (
                <Link to={item.to} key={index}>
                    <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                        <div className="sidebar__menu__item__icon">
                            {item.icon}
                        </div>
                        <div className="sidebar__menu__item__text">
                            {item.display}
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
</div>;

};

export default Sidebar;