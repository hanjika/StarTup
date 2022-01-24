import React from 'react';
import { MdError } from 'react-icons/md';

const Error = ({ errorMessage }) => {
    return (
        <div className='error'>
            <h2>Oops!</h2>
            <MdError className='error-icon' size='60px' /> 
            <p>There has been an error</p>
            <p>Error: {errorMessage}</p>
        </div>
    )
}

export default Error;
