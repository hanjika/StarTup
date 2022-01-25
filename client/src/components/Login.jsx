import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginSuccess from './LoginSuccess';
import Error from './Error';

const Login = ({ id, setId, name, setName }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [error, setError] = useState(null)

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const userLogin = {
            email: email,
            password: password
        }
        setData(userLogin);
    }

    useEffect(() => {
        if (data) {
            axios.post('http://localhost:3000/login', data).then(
                (result) => {
                    console.log(result.data);
                    setId(result.data.id);
                    setName(result.data.first_name);
                    setIsLoggedIn(true)
                },
                (error) => {
                    setError(error);
                }
            )
        }
    }, [data]);

    if (error) {
        return <Error errorMessage={error.message} />;
    } else if (isLoggedIn) {
        return <LoginSuccess id={id} name={name} />
    }

    return (
        <section className='section-login'>
            <form className='form-login' onSubmit={handleLoginSubmit}>
                <h2>Log In</h2>
                <label for='email'><b>Email</b></label>
                <input type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)} />

                <label for='password'><b>Password</b></label>
                <input type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Log in</button>
            </form>
        </section>
    )
}

export default Login;