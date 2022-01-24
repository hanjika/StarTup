import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { CgMenu, CgClose } from 'react-icons/cg';

const Nav = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const hamburgerIcon = <CgMenu className='hamburger' size='40px' onClick={() => setHamburgerOpen(!hamburgerOpen)} />
    const closeIcon = <CgClose className='hamburger' size='40px' onClick={() => setHamburgerOpen(!hamburgerOpen)} />

    return (
        <nav className='header-nav'>
            {hamburgerOpen ? closeIcon : hamburgerIcon}
            {hamburgerOpen &&
                <div className='mobile-nav-modal'>
                    <NavLinks />
                </div>
            }      
        </nav>
    );
};

export default Nav;

