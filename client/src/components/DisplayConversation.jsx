import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';
import OpenConversation from './OpenConversation';
import LastMessage from './LastMessage';

const DisplayConversation = ({ id, conversation }) => {
    const [openConv, setOpenConv] = useState(false);
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
    } else if (openConv) {
        return <OpenConversation setOpenConv={setOpenConv} userId={id} conversation={conversation} otherUserData={otherUserData} />
    } else {
        return (
            <li className='single-conversation' onClick={() => setOpenConv(true)}>
                <img src={otherUserData.photo} alt={otherUserData.first_name}></img>
                <div className='conversation-column'>
                    <p><b>{otherUserData.first_name}</b> <span className='starsign'>({otherUserData.starsign})</span></p>
                    <LastMessage key={uuid()} userId={id} message={conversation.messages[conversation.messages.length-1]} otherUserData={otherUserData} />
                </div>
            </li>
        )
    }
};

export default DisplayConversation;