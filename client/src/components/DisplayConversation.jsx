import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';
import Message from './Message';

const DisplayConversation = ({ id, conversation }) => {
    const [otherUserId, setOtherUserId] = useState(null);
    const [otherUserData, setOtherUserData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const otherId = conversation.userIds.find(userId => userId !== id);
        setOtherUserId(otherId);
    }, []);

    useEffect(() => {
        if (otherUserId !== null) {
            axios.get('http://localhost:3000/api/users/' + otherUserId).then(
                (result) => {
                    setIsLoaded(true);
                    setOtherUserData(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }
    }, [otherUserId]);

    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {
        return (
            <li className='single-conversation'>
                <img src={otherUserData.photo} alt={otherUserData.first_name}></img>
                <div className='conversation-column'>
                    <p><b>{otherUserData.first_name}</b></p>
                    <ul className='single-conversation-messages'>
                        {conversation.messages.map(message => (
                            <Message key={uuid()} userId={id} message={message} otherUserData={otherUserData} />
                        ))}
                    </ul>
                </div>
            </li>
        )
    }
};

export default DisplayConversation;
