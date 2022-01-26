import React from 'react';

const LastMessage = ({ userId, message, otherUserData }) => {
    return (
        <div className='last-message'>
            <p className='date'>{message.date}</p>
            <p>
                {message.authorId === userId ? (
                    'You: '
                ) : (
                    `${otherUserData.first_name}: `
                )}
                {message.content}
            </p>
        </div>
        
    );
};

export default LastMessage;
