import './App.scss';
import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import LoginSuccess from './components/LoginSuccess';
import Matching from './components/Matching';
import Conversations from './components/Conversations';
import SignUpSuccess from './components/SignUpSuccess';
import Api from './components/Api';
import ProfileSettings from './components/ProfileSettings';
import Header from './components/Header';

const App = () => {
  const [id, setId] = useState(1);
  const [name, setName] = useState('');
  const [likedUsers, setLikedUsers] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login id={id} setId={setId} name={name} setName={setName} />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/loginsuccess' element={<LoginSuccess id={id} name={name} />} />
            <Route path='/signupsuccess' element={<SignUpSuccess />} />
            <Route path='/match' element={<Matching id={id} likedUsers={likedUsers} setLikedUsers={setLikedUsers} />} />
            <Route path='/conversations' element={<Conversations id={id} likedUsers={likedUsers} />} />
            <Route path='/profilesettings' element={<ProfileSettings id={id} />} />
            <Route path='/api/login' exact element={<Api />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
