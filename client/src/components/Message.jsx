import React from 'react';

const Message = ({ userId, message, otherUserData }) => {
    return (
        <li className='single-message'>
            {message.authorId === userId ? (
                'You: '
            ) : (
                `${otherUserData.first_name}: `
            )}
            {message.content}
        </li>
    );
};

export default Message;
