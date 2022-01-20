import React, { useState } from 'react';

const Login = ({ userId }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className='form-login'>
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