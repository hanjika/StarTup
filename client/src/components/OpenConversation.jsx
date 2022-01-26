import React from 'react';
import uuid from 'react-uuid';
import Message from './Message';

const OpenConversation = ({userId, conversation, otherUserData}) => {
  console.log('opened conversation: ' + conversation);
  
  return (
    <ul className='open-conversation-messages'>
        {conversation.messages.map(message => (
            <Message key={uuid()} userId={userId} message={message} otherUserData={otherUserData} />
        ))}
    </ul>
);
};

export default OpenConversation;
