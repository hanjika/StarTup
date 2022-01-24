import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/startup-logo-colour.png';

const Header = ({ id }) => {
    let location = useLocation();
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    if (location.pathname === '/') {
        return null;
    } else {
        return (
            <header>
                <img src={logo} alt='StarTup-logo' className='logo'></img>
                <Nav toggleHamburger={toggleHamburger} id={id} />
            </header>
        )
    }
}

export default Header;
