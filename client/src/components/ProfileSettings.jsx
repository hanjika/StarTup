import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const ProfileSettings = ({ id }) => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState(today);
    const [motto, setMotto] = useState('');
    const [photo, setPhoto] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/users/' + id).then(
            (result) => {
                console.log(result.data);
                setFirstName(result.data.first_name);
                setLastName(result.data.last_name);
                setBirthdate(result.data.birthdate);
                setMotto(result.data.motto);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {
        return (
            <section className='section-profile-settings'>
                <h2>Profile Settings</h2>
                <img src={photo} alt='profile-image'></img>
                <form className='form-profile-settings'>
                    <label for='photo'><b>Change Photo</b></label>
                    <input type='text' value={photo} name='photo' onChange={(e) => setPhoto(e.target.value)} />

                    <label for='firstName' className='required'><b>First Name</b></label>
                    <input type='text' value={firstName} name='firstName' required onChange={(e) => setFirstName(e.target.value)} />

                    <label for='lastName' className='required'><b>Last Name</b></label>
                    <input type='text' value={lastName} name='lastName' required onChange={(e) => setLastName(e.target.value)} />


                    <label for='birthdate' className='required'><b>Birthdate</b></label>
                    <input type='date' max={today} value={birthdate} name='birthdate' required onChange={(e) => setBirthdate(e.target.value)} />

                    <label for='motto'><b>Personal Motto</b></label>
                    <input type='motto' value={motto} name='motto' onChange={(e) => setMotto(e.target.value)} />

                    <button type='submit'>Edit</button>
                    <button>Cancel</button>
                </form>
            </section>
        )
    }
};

export default ProfileSettings;
