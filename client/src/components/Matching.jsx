import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';

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
            <h2>There are {otherUsers.length} other users to match with</h2>
        </section>
    )
  }
};

export default Matching;
