import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';
import UserForMatch from './UserForMatch';
import SwipeButtons from './SwipeButtons';

const Matching = ({ id, likedUsers, setLikedUsers }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [otherUsers, setOtherUsers] = useState([]);
    const [count, setCount] = useState(null);

    // const getNumberUsers = () => {
    //     console.log(otherUsers);
    //     console.log(otherUsers.length);
    //     setCount(otherUsers.length);
    //     console.log('count: ' + count);
    // }

    useEffect(() => {
        if (otherUsers.length !== 0) {
            console.log(otherUsers);
            console.log(otherUsers.length);
            setCount(otherUsers.length);
            console.log('count: ' + count);
        }
    }, [otherUsers]);

    useEffect(() => {
        axios.get('/api/users/').then(
            (result) => {
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
                    {count === 0 ? (
                        <h3 className='exhausted-matches'>No more entrepreneurs for the time being. Come back later!</h3>
                    ) : (
                        otherUsers.map(user => (
                            <UserForMatch key={user.id} user={user} count={count} setCount={setCount} />
                        ))
                    )}
                </div>
                <SwipeButtons />
            </section>
        )
    }
};

export default Matching;
