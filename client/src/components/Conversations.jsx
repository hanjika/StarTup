import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayConversation from './DisplayConversation';

const Conversations = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [allConversations, setAllConversations] = useState([]);
  const [userConversations, setUserConversations] = useState([]);

  useEffect(() => {
    if (userConversations !== []) {
      setIsLoaded(true);
    }
  }, [userConversations]);

  useEffect(() => {
    allConversations.map(conversation => {
      if (conversation.userIds.includes(id)) {
        setUserConversations(userConversations => [...userConversations, conversation]);
      }
    })
  }, [allConversations]);

  useEffect(() => {
    console.log(id);
    axios.get('http://localhost:3000/api/messages/').then(
      (result) => {
        setAllConversations(result.data);
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
      <section className='section-conversations'>
          <h2>Your conversations</h2>
          <ul className='all-conversations'>
            {userConversations.map(conversation => (
              <DisplayConversation key={conversation.conversationId} conversation={conversation} id={id} />
            ))}
          </ul>
      </section>
    )
  }
};

export default Conversations;
