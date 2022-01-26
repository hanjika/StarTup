import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import axios from 'axios';
import blankProfileImage from '../images/blank-profile-picture.jpg';

const UserForMatch = ({ user }) => {
    // const [liked, setLiked] = useState(null);

    // useEffect(() => {
    //     if (liked) {
    //         axios.post('http://localhost:3000/api/user/' + user.id, liked).then(
    //             (result) => {
    //                 console.log(result.data);
    //                 setLiked(result.data.id);
    //                 setName(result.data.first_name);
    //                 setIsLoggedIn(true)
    //             },
    //             (error) => {
    //                 setError(error);
    //             }
    //         )
    //     }
    // }, [liked]);

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
        // if (direction === 'right') {
        //     setLiked();
        // }
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <TinderCard className='swiper' onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
            <div className='user-card' style={user.photo === '' ? (
                { backgroundImage: `url(${blankProfileImage})` }
            ) : (
                { backgroundImage: `url(${user.photo})` }
            )}>
                {/* <div style={{backgroundImage: `url(${user.photo})`}} className='user-card'></div> */}
                <div className='user-details'>
                    <h3>{user.firstName}</h3>
                    <h4>{user.starsign}</h4>
                    <p>{user.motto}</p>
                </div>
            </div>
            {/* <h3>{user.first_name}</h3>
                <h4>{user.starsign}</h4>
                <p>{user.motto}</p> */}
        </TinderCard>
    );
};

export default UserForMatch;
