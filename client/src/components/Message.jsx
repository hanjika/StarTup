import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';
import blankProfileImage from '../images/blank-profile-picture.jpg';

const Message = ({ userId, message, otherUserData }) => {
    const [userPhoto, setUserPhoto] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/users/' + userId).then(
            (result) => {
                setIsLoaded(true);
                setUserPhoto(result.data.photo);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    if (error) {
        return <Error errorMessage={error.message} />;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else if (message.authorId === userId) {
        return (
            <li className='single-message you'>
                <div>
                    <p className='date'>{message.date}</p>
                    <p>You: {message.content}</p>
                </div>
                <img src={userPhoto === '' ? blankProfileImage : userPhoto} alt='You'></img>
            </li>
        )
    } else {
        return (
            <li className='single-message other'>
                <img src={otherUserData.photo === '' ? blankProfileImage : otherUserData.photo} alt={otherUserData.first_name}></img>
                <div>
                    <p className='date'>{message.date}</p>
                    <p>{otherUserData.first_name}: {message.content}</p>
                </div>
            </li>
        )
    }
};

export default Message;
