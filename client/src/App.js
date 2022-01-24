import './App.scss';
import { React, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import LoginSuccess from './components/LoginSuccess';
import Matches from './components/Matches';
import Conversations from './components/Conversations';
import SignUpSuccess from './components/SignUpSuccess';
import Api from './components/Api';
import ProfileSettings from './components/ProfileSettings';
import Header from './components/Header';

const App = () => {
  const [id, setId] = useState(1);
  const [name, setName] = useState('');
  // let location = useLocation();

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
            <Route path='/matches' element={<Matches id={id} />} />
            <Route path='/conversations' element={<Conversations id={id} />} />
            <Route path='/profilesettings' element={<ProfileSettings id={id} />} />
            <Route path='/api/login' exact element={<Api />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
