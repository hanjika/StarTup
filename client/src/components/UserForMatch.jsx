import React from 'react';

const UserForMatch = ({ user }) => {
  return (
      <div className='user'>
          <h3>{user.first_name}</h3>
          <h4>{user.starsign}</h4>
          <p>{user.motto}</p>
      </div>
  );
};

export default UserForMatch;
