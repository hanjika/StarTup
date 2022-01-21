import React from 'react';
import { Link } from 'react-router-dom';

const LoginSuccess = ({ id, name }) => {
  // const { id, first_name } = useParams();
  // console.log(id);
  // console.log(first_name)
  console.log('id:' + id);
  console.log('name:' + name);

  return (
    <section className='login-success'>
      {/* <h2>Welcome, {name}</h2> */}
      <Link to={'/matches'}>
        <button>Start matching</button>
      </Link>
      <Link to={'/conversations'}>
        <button>View conversations</button>
      </Link>
    </section>
  ) 
};

export default LoginSuccess;
