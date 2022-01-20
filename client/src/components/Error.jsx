import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Error = ({ errorMessage }) => {
    return (
        <div className='error'>
            <h2>Oops!</h2>
            <p>There has been an error</p>
            <p>Error: {errorMessage}</p>
            <FontAwesomeIcon icon={faExclamationTriangle} className='error-img' size='6x' /> 
        </div>
    )
}

export default Error;
