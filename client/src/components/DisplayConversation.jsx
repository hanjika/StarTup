import React from 'react';

const DisplayConversation = ({ id, convo }) => {
    const messages = convo.messages;
    console.log(convo);
    console.log(convo.messages);
    console.log('my id: ' + id);
    return (
        {messages.map(message => {
            console.log(message);
        })}
    )
};

export default DisplayConversation;
