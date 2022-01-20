import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const userLogin = {
            email: email,
            password: password,
        }
        setData(userLogin);
    }


    useEffect(() => {
        if (data) {
            axios.post('https://localhost:3000/login/', data).then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    alert(error);
                    console.log(error);
                }
            )
        }
    }, [data]);

    return (
        <form className='form-login' onSubmit={handleLoginSubmit}>
            <h2>Log in</h2>
            <label for='email'><b>Email</b></label>
            <input type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)}></input>

            <label for='password'><b>Password</b></label>
            <input type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)}></input>

            <button type='submit'>Log in</button>
        </form>
    )
}

export default Login;