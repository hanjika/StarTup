import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Hamburger = ({ toggleHamburger }) => {    
    return (
        <div className='hamburger' onClick={toggleHamburger}>
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
}

export default Hamburger;
