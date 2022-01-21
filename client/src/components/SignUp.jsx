import React, { useState, useEffect } from 'react';
import moment from 'moment';
import uuid from 'react-uuid';
import axios from 'axios';
import Error from './Error';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [birthdate, setBirthdate] = useState(today);
    const [motto, setMotto] = useState('');
    const [photo, setPhoto] = useState('');
    const [data, setData] = useState(null);

    const getSign = (birthdate) => {
        const signs = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
        const sign = Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', {month: 'numeric'}).format(new Date(birthdate))) - 1;
        return signs[sign];
    }

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            userId: uuid(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            birthdate: birthdate,
            motto: motto,
            photo: photo,
            starsign: getSign(birthdate)
        }
        setData(newUser);
    }

    useEffect(() => {
        if (data) {
            axios.post('http://localhost:3000/api/register', data).then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    alert(error);
                    console.log(error);
                    return <Error errorMessage={error.message} />;
                }
            )
        }
    }, [data]);

    return (
        <form className='form-signup' onSubmit={handleSignupSubmit}>
            <h2>Sign Up</h2>
            <label for='first-name' className='required'><b>First Name</b></label>
            <input type='text' value={firstName} name='first-name' required onChange={(e) => setFirstName(e.target.value)}></input>

            <label for='last-name' className='required'><b>Last Name</b></label>
            <input type='text' value={lastName} name='last-name' required onChange={(e) => setLastName(e.target.value)}></input>

            <label for='email' className='required'><b>Email</b></label>
            <input type='email' value={email} name='email' required onChange={(e) => setEmail(e.target.value)}></input>

            <label for='password' className='required'><b>Choose Password</b></label>
            <input type='password' value={password} name='password' required onChange={(e) => setPassword(e.target.value)}></input>

            <label for='passwordRepeat' className='required'><b>Confirm Password</b></label>
            <input type='password' value={passwordRepeat} name='passwordRepeat' required onChange={(e) => setPasswordRepeat(e.target.value)}></input>

            <label for='birthdate' className='required'><b>Birthdate</b></label>
            <input type='date' max={today} value={birthdate} name='birthdate' required onChange={(e) => setBirthdate(e.target.value)}></input>

            <label for='motto'><b>Personal Motto</b></label>
            <input type='motto' value={motto} name='motto' onChange={(e) => setMotto(e.target.value)}></input>

            <label for='photo'><b>Attach Photo URL</b></label>
            <input type='photo' value={photo} name='photo' onChange={(e) => setPhoto(e.target.value)}></input>

            <Link to={'/signupsuccess'}>
                <button type='submit'>Sign Up</button>
            </Link>
        </form>
    )
}

export default SignUp;