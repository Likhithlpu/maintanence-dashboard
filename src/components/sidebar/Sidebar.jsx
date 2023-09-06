import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const sidebarNavItems = [
    {
        display: 'Overview',
        icon: <i className='bx bx-home'></i>,
        to: '/maintenance-dashboard',
        section: ''
    },
    {
        display: 'Air Quality - AQ',
        icon: <i className='bx bx-wind'></i>,
        to: '/maintenance-dashboard/aq',
        section: 'aq'
    },

    {
        display: 'Energy Monitoring - EM',
        icon: <i className='bx bx-plug'></i>,
        to: '/maintenance-dashboard/em',
        section: 'em'
    },
    
    {
        display: 'Solar - SL',
        icon: <i className='bx bx-sun'></i>,
        to: '/maintenance-dashboard/sl',
        section: 'sl'
    },
    {
        display: 'Smart Rooms - SR',
        icon: <i className='bx bx-building-house'></i>,
        to: '/maintenance-dashboard/sr',
        section: 'sr'
    },
    {
        display: 'Weather Monitoring - WE',
        icon: <i className='bx bx-cloud-lightning'></i>,
        to: '/maintenance-dashboard/we',
        section: 'we'
    },
    {
        display: 'Water Monitoring - WM',
        icon: <i className='bx bx-water'></i>,
        to: '/maintenance-dashboard/wm',
        section: 'wm'
    },
    {
        display: 'WiSUN - WN',
        icon: <i className='bx bx-bulb'></i>,
        to: '/maintenance-dashboard/wn',
        section: 'wn'
    },
    {
        display: 'Crowd Monitoring - CM',
        icon: <i className='bx bx-child'></i>,
        to: '/maintenance-dashboard/cm',
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

    useEffect(() => {
        const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
        const newStepHeight = sidebarItem.clientHeight; // Get the updated step height
        setStepHeight(newStepHeight); // Update the stepHeight state
    
        // Calculate and set the initial position of the indicator
        const curPath = window.location.pathname.split('/')[2];
        const activeItem = curPath ? sidebarNavItems.findIndex(item => item.section === curPath) : 0;
        const initialPosition = activeItem * newStepHeight; // Use the updated step height here
        indicatorRef.current.style.transform = `translateX(-50%) translateY(${initialPosition}px)`;
    
        setActiveIndex(activeItem); // Use activeItem directly
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

