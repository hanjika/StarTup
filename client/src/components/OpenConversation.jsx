import React, { useState } from 'react';
import uuid from 'react-uuid';
import Message from './Message';
// import { useNavigate } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';

const OpenConversation = ({ setOpenConv, userId, conversation, otherUserData }) => { 
    const [newMessage, setNewMessage] = useState('');
    // let navigate = useNavigate();  

    const sendMessage = () => {
        console.log('sending message: ' + newMessage);
    }

    return (
        <div className='open-conversation-modal'>
            <CgClose className='conversation-close-icon' size='20px' onClick={() => {
                setOpenConv(false);
                // navigate('/conversations');
            }} />
            <ul className='open-conversation-messages'>
                {conversation.messages.map(message => (
                    <Message key={uuid()} userId={userId} message={message} otherUserData={otherUserData} />
                ))}
            </ul>
            <form className='send-message-form' onSubmit={sendMessage}>
                <input type='text' value={newMessage} name='newMessage' placeholder='Type a new message...' onChange={(e) => setNewMessage(e.target.value)} />
                <button className='send-message-button' type='submit'>Send</button>
            </form>
        </div>
        
    );
};

export default OpenConversation;
