import React from 'react';
import { Link } from 'react-router-dom';

const LoginSuccess = () => {
  return (
    <section className='login-success'>
      <Link to={'/match'}>
        <button>Start matching</button>
      </Link>
      <Link to={'/conversations'}>
        <button>View conversations</button>
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

export default LoginSuccess;
