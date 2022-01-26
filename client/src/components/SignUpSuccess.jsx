import React from 'react';
import { Link } from 'react-router-dom';

const SignUpSuccess = ({data}) => {
    console.log(data);
    return (
        <section className='signup-success'>
            <h2>Welcome!</h2>
            <p>You are now a member</p>
            <Link to={'/matches'}>
                <button>Start matching</button>
            </Link>
            <Link to={'/profilesettings'}>
                <button>Profile settings</button>
            </Link>
            <Link to={'/'}>
                <button>Logout</button>
            </Link>
        </section>
    )
};

export default SignUpSuccess;
