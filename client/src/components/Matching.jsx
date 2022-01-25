import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';
import UserForMatch from './UserForMatch';
import SwipeButtons from './SwipeButtons';

const Matching = ({ id, likedUsers, setLikedUsers }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3000/api/users/').then(
          (result) => {
              console.log(result.data)
              setIsLoaded(true);
              setOtherUsers(result.data.filter(user => user.id !== id));
          },
          (error) => {
              setIsLoaded(true);
              setError(error);
          }
      )
  }, []);

  if (error) {
      return <Error errorMessage={error.message} />;
  } else if (!isLoaded) {
      return <p>Loading...</p>;
  } else {
    return (
        <section className='section-matching'>
            <div className='matching-cards-container'>
                {otherUsers.map(user => (
                    <UserForMatch key={user.id} user={user} />
                ))}
            </div>
            <SwipeButtons />
        </section>
    )
  }
};

export default Matching;
