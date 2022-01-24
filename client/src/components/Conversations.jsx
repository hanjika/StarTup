import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Conversations = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  console.log(messages);

  useEffect(() => {
    axios.get('http://localhost:3000/api/messages/' + id).then(
      (result) => {
          setIsLoaded(true);
          setMessages(result.data);
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
          <p>You have {messages.length} messages</p>
      </section>
    )
  }
};

export default Conversations;
