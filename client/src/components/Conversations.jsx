import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayConversation from './DisplayConversation';

const Conversations = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [allConversations, setAllConversations] = useState([]);
  const [userConversations, setUserConversations] = useState([]);

  // const userOnlyConvos = () => {
  //   {allConversations.map(conversation => {
  //     console.log(conversation.userIds);
  //     if (conversation.userIds.includes(id)) {
  //       console.log(conversation)
  //     }
  //   })}
  // }

  useEffect(() => {
    if (userConversations !== []) {
      console.log(userConversations);
      setIsLoaded(true);
      console.log(userConversations);
    }
  }, [userConversations]);

  useEffect(() => {
    const array = allConversations.map(conversation => {
      if (conversation.userIds.includes(id)) {
        setUserConversations(userConversations => [...userConversations, conversation]);
        console.log(conversation.messages);
      }
    })
  }, [allConversations]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/messages/').then(
      (result) => {
        setAllConversations(result.data);
        // userOnlyConvos();
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
          <p>You have {userConversations.length} conversations</p>
          <ul>
            <li>{userConversations}</li>
            {userConversations.map(conversation => {
              // console.log(conversation);
              <DisplayConversation key={conversation.conversationId} convo={conversation} id={id} />
            })}
          </ul>
      </section>
    )
  }
};

export default Conversations;
