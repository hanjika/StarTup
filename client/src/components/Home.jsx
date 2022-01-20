import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import logo from '../images/startup-logo-whitebg.png';

const Home = () => {
    return (
        <div className='homepage'>
            <Header />
            <main>
                <div className='homepage-first-view'>
                    <img src={logo} alt='StarTup-logo' className='logo'></img>
                    <Link to={'/signup'} className='signup-link'>
                        <button>Sign up</button>
                    </Link>
                    <Link to={'/login'} className='login-link'>
                        <button>Log in</button>
                    </Link>
                </div>
            </main>
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
