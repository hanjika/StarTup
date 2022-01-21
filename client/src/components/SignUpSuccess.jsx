import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const SignUpSuccess = () => {
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
            <LogoutButton />
        </section>
    )
};

export default SignUpSuccess;
