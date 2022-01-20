import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
        <div className='homepage'>
            <div>Welcome</div>
            <Link to={'/signup'} className='signup-link'>
                <button>Sign up</button>
            </Link>
            <Link to={'/login'} className='login-link'>
                <button>Log in</button>
            </Link>
        </div>
    )
}

export default Home;
