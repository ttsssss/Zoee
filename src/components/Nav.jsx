import React from 'react';
import '../styles/navigation.css';
import zoee from '../assets/images/logos.svg';
import notifications from '../assets/images/notifications.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className='nav-bar'>
            <div className="nav-inner">
                <img src={zoee} alt="" />
                <div className="nav-items">
                    <Link to="#">Home</Link>
                    <Link to="#">Contacts</Link>
                </div>
                <div className='nav-right'>
                    <img src={notifications} alt="notifications" />
                    <a href="#"><i class="icon"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Nav;
