import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ setHamburgerOpen, id }) => {
    return (
        <ul>
            {id === 0 ? (
                <>
                    <li>
                        <Link to={'/login'} onClick={() => setHamburgerOpen(false)} className='nav-link'>Log In</Link>
                    </li>
                    <li>
                        <Link to={'/signup'} onClick={() => setHamburgerOpen(false)} className='nav-link'>Sign Up</Link>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to={'/match'} onClick={() => setHamburgerOpen(false)} className='nav-link'>Start Matching</Link>
                    </li>
                    <li>
                        <Link to={'/conversations'} onClick={() => setHamburgerOpen(false)} className='nav-link'>Conversations</Link>
                    </li>
                    <li>
                        <Link to={'/profilesettings'} onClick={() => setHamburgerOpen(false)} className='nav-link'>Profile Settings</Link>
                    </li>
                    <li>
                        <Link to={'/'} onClick={() => setHamburgerOpen(false)} className='nav-link'>Logout</Link>
                    </li>
                </>
            )}
        </ul>
    );
};

export default NavLinks;