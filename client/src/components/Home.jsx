import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import logo from '../images/startup-logo-colour.png';

const Home = () => {
    return (
        <div className='homepage'>
            {/* <Header /> */}
            <main>
                <div className='homepage-first-view'>
                    <img src={logo} alt='StarTup-logo' className='logo'></img>
                    <div className='homepage-text'>
                    <p><b>Find your <em>entrepreneurial match</em> based on <em>astrology</em></b></p>
                        <Link to={'/signup'} className='signup-link'>
                            <button>Sign up</button>
                        </Link>
                        <Link to={'/login'} className='login-link'>
                            <button>Log in</button>
                        </Link>
                        <Link to={'/api/home'} className='api-link'>
                            <button>API</button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;
