import './App.scss';
import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import LoginSuccess from './components/LoginSuccess';
import Matching from './components/Matching';
import Conversations from './components/Conversations';
import SignUpSuccess from './components/SignUpSuccess';
import ProfileSettings from './components/ProfileSettings';
import Header from './components/Header';

const App = () => {
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [likedUsers, setLikedUsers] = useState([]);

  return (
    <div className="App">
      <Router basename='/StarTup'>
      <Header id={id} />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login id={id} setId={setId} firstName={firstName} setFirstName={setFirstName} />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/loginsuccess' element={<LoginSuccess />} />
            <Route path='/signupsuccess' element={<SignUpSuccess />} />
            <Route path='/match' element={<Matching id={id} likedUsers={likedUsers} setLikedUsers={setLikedUsers} />} />
            <Route path='/conversations' element={<Conversations id={id} likedUsers={likedUsers} />} />
            <Route path='/profilesettings' element={<ProfileSettings id={id} />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
