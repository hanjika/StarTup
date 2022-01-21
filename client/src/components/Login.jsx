import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Login = ({ id, setId, setName }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const isMounted = useRef(false);
    const [newId, setNewId] = useState(id)
    const [posted, setPosted] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const userLogin = {
            email: email,
            password: password,
        }
        setData(userLogin);
    }

    // useEffect(() => {
    //     if (isMounted.current) {
    //         console.log(isMounted)
    //         window.location.replace(`/loginsuccess`);
    //     } else {
    //         isMounted.current = true;
    //     }
    // }, [id])

    // const handlePost = async (userId, userName) => {
    //     await setId(userId);
    //     await setName(userName);
    //     await console.log(id + name)
    //     // await window.location.replace(`/loginsuccess`);
    // }

    useEffect(() => {
        if (data) {
            axios.post('http://localhost:3000/api/login/', data).then(
                (result) => {
                    setId(result.data.id);
                    setName(result.data.first_name);
                    window.location.replace(`/loginsuccess`);
                    // setPosted(true);
                    // console.log(id + name);
                    // const userId = result.data.id;
                    // const userName = result.data.first_name;
                    // console.log(userId + userName)
                    // handlePost(userId, userName);
                },
                (error) => {
                    alert(error);
                    console.log(error);
                }
            )
        }
    }, [data]);

    // useEffect(() => {
        //     const postData = async () => {
        //         const result = await axios.post('http://localhost:3000/api/login/', data);
        //         await setId(result.data.id);
        //         await setName(result.data.first_name);
        //         await changePath();
        //     }
        //     if (data) {
        //         postData();
        //     }
        // }, [data]);

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