import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { CgMenu, CgClose } from 'react-icons/cg';

const Nav = ({ id }) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const hamburgerIcon = <CgMenu className='hamburger-icon' size='40px' onClick={() => setHamburgerOpen(!hamburgerOpen)} />
    const closeIcon = <CgClose className='close-icon' size='40px' onClick={() => setHamburgerOpen(!hamburgerOpen)} />

    return (
        <nav className='header-nav'>
            {hamburgerOpen ? closeIcon : hamburgerIcon}
            {hamburgerOpen &&
                <div className='nav-modal'>
                    <NavLinks setHamburgerOpen={setHamburgerOpen} id={id} />
                </div>
            }      
        </nav>
    );
};

export default Nav;

