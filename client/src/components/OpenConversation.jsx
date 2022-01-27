import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';
import moment from 'moment';
import Message from './Message';
import Error from './Error';
import { CgClose } from 'react-icons/cg';
import { MdSend } from 'react-icons/md';

const OpenConversation = ({ setOpenConv, userId, conversation, otherUserData }) => { 
    const [newMessage, setNewMessage] = useState('');
    const [postData, setPostData] = useState(null);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = (e) => {
        e.preventDefault();
        if (newMessage !== '') {
            console.log('conversationId: ' + conversation.conversationId);
            const messageData = {
                authorId: userId,
                content: newMessage,
                date: moment(new Date()).format('DD-MM-YYYY')
            };
            console.log(messageData)
            // setPostData(messageData);
            setNewMessage('');
        }
    }

    useEffect(() => {
        if (postData) {
            axios.post('/api/conversations/' + conversation.conversationId, postData).then(
                (result) => {
                    console.log(result.data)
                    setIsSent(true);
                },
                (error) => {
                    setError(error);
                }
            )
        }
    }, [postData]);

    if (error) {
        return <Error errorMessage={error.message} />;
    } else if (isSent) {
        console.log('message sent');
    }

    return (
        <div className='open-conversation-modal'>
            <button className='close-modal-button' onClick={() => setOpenConv(false)}>
                <CgClose className='conversation-close-icon' size='20px' />
            </button>
            <ul className='open-conversation-messages'>
                {conversation.messages.map(message => (
                    <Message key={uuid()} userId={userId} message={message} otherUserData={otherUserData} />
                ))}
            </ul>
            <form className='send-message-form' onSubmit={sendMessage}>
                <input type='text' value={newMessage} name='newMessage' placeholder='Type a new message...' onChange={(e) => {
                    e.preventDefault();
                    setNewMessage(e.target.value);
                }} />
                <button className={newMessage === '' ? 'send-message-button inactive' : 'send-message-button active'} type='submit'>
                    <MdSend size='20px' />
                </button>
            </form>
        </div>
        
    );
};

export default OpenConversation;
