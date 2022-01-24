import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul>
        <li>
            <Link to={'/login'}>Log In</Link>
        </li>
        <li>
            <Link to={'/signup'}>Sign Up</Link>
        </li>
        <li>
            <Link to={'/matches'}>Start Matching</Link>
        </li>
        <li>
            <Link to={'/conversations'}>Matches</Link>
        </li>
        <li>
            <Link to={'/profilesettings'}>Profile Settings</Link>
        </li>
        {/* <li>
            <Link to={'/logout'}>Logout</Link>
        </li> */}
    </ul>
  );
};

export default NavLinks;