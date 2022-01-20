import React, { useState } from 'react';
import Hamburger from './Hamburger';

const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <div className='header'>
            <Hamburger toggleHamburger={toggleHamburger}/>
        </div>
    )
}

export default Header;
