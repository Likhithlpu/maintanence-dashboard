import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan,faPeopleArrows,faWind } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';


const sidebarNavItems = [
    {
        display: 'Overview',
        icon: <i className='bx bx-home'></i>,
        to: '/maintenance-dashboard',
        section: ''
    },
    {
        display: 'Air Quality',
        icon: <FontAwesomeIcon icon={faPeopleArrows}/>,
        to: '/maintenance-dashboard/AQ',
        section: 'AQ'
    },
    {
        display: 'Crowd Monitoring',
        icon: <FontAwesomeIcon icon={faPeopleArrows}/>,
        to: '/maintenance-dashboard/CM',
        section: 'CM'
    },
    {
        display: 'Energy Monitoring',
        icon: <FontAwesomeIcon icon={faPeopleArrows}/>,
        to: '/maintenance-dashboard/EM',
        section: 'EM'
    },
    {
        display: 'Solar Power Generation',
        icon: <FontAwesomeIcon icon={faPeopleArrows}/>,
        to: '/maintenance-dashboard/SL',
        section: 'SL'
    },
    {
        display: 'Smart Rooms Air Conditioner',
        icon: <FontAwesomeIcon icon={faFan}/>,
        to: '/maintenance-dashboard/SR-AC',
        section: 'SR-AC'
    },
    {
        display: 'Smart Rooms Energy Monitoring',
        icon: <FontAwesomeIcon icon={faPeopleArrows}/>,
        to: '/maintenance-dashboard/SR-EM',
        section: 'SR-EM'
    },
    {
        display: 'Smart Rooms Occupancy',
        icon: <FontAwesomeIcon icon={faPeopleArrows}/>,
        to: '/maintenance-dashboard/SR-OC',
        section: 'SR-OC'
    },
    {
        display: 'Weather Monitoring',
        icon: <FontAwesomeIcon icon={faPeopleArrows}/>,
        to: '/maintenance-dashboard/WE',
        section: 'WE'
    },
    {
        display: 'Water Monitoring',
        icon: <FontAwesomeIcon icon={faPeopleArrows}/>,
        to: '/maintenance-dashboard/WM',
        section: 'WM'
    },
    {
        display: 'WiSUN',
        icon: <FontAwesomeIcon icon={faPeopleArrows}/>,
        to: '/maintenance-dashboard/WN',
        section: 'WN'
    },
];


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

