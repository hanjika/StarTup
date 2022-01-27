import React, { useState, useEffect } from 'react';
import moment from 'moment';
import uuid from 'react-uuid';
import axios from 'axios';
import Error from './Error';
import SignUpSuccess from './SignUpSuccess';

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
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState(null);

    const getSign = (birthdate) => {
        const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
        const sign = Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', { month: 'numeric' }).format(new Date(birthdate))) - 1;
        return signs[sign];
    }

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuid(),
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthdate: birthdate,
            motto: motto,
            starsign: getSign(birthdate),
            photo: photo,
            liked_user_ids: []
        }
        setData(newUser);
    }

    useEffect(() => {
        if (data) {
            axios.post('http://localhost:3000/signup', data).then(
                (result) => {
                    console.log(result.data)
                    setIsRegistered(true);
                },
                (error) => {
                    setError(error);
                }
            )
        }
    }, [data]);


    if (error) {
        return <Error errorMessage={error.message} />;
    } else if (isRegistered) {
        return <SignUpSuccess data={data} />
    }

    return (
        <section className='section-signup'>
            <form className='form-signup' onSubmit={handleSignupSubmit}>
                <h2>Sign Up</h2>
                <label for='firstName' className='required'><b>First Name</b></label>
                <input type='text' value={firstName} name='firstName' required onChange={(e) => setFirstName(e.target.value)}></input>

                <label for='lastName' className='required'><b>Last Name</b></label>
                <input type='text' value={lastName} name='lastName' required onChange={(e) => setLastName(e.target.value)}></input>

                <label for='email' className='required'><b>Email</b></label>
                <input type='email' value={email} name='email' required onChange={(e) => setEmail(e.target.value)}></input>

                <label for='password' className='required'><b>Password</b></label>
                <input type='password' value={password} name='password' required onChange={(e) => setPassword(e.target.value)}></input>

                <label for='passwordRepeat' className='required'><b>Confirm Password</b></label>
                <input type='password' value={passwordRepeat} name='passwordRepeat' required onChange={(e) => setPasswordRepeat(e.target.value)}></input>

                <label for='birthdate' className='required'><b>Birthdate</b></label>
                <input type='date' max={today} value={birthdate} name='birthdate' required onChange={(e) => setBirthdate(e.target.value)}></input>

                <label for='motto'><b>Personal Motto</b></label>
                <input type='motto' value={motto} name='motto' onChange={(e) => setMotto(e.target.value)}></input>

                <label for='photo'><b>Attach Photo URL</b></label>
                <input type='photo' value={photo} name='photo' onChange={(e) => setPhoto(e.target.value)}></input>
                <button type='submit'>Sign up</button>
            </form >
        </section >
    )
}

export default SignUp;