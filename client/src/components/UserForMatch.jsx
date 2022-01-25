import React from 'react';
import TinderCard from 'react-tinder-card';

const UserForMatch = ({ user }) => {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <TinderCard key={user.id} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
            <div style={{ backgroundImage: `url(${user.photo})` }} className='user-card'>
                <h3>{user.first_name}</h3>
                <h4>{user.starsign}</h4>
                <p>{user.motto}</p>
            </div>
        </TinderCard>
    );
};

export default UserForMatch;
