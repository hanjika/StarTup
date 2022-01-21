import './App.scss';
import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Api from './components/Api';

const App = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login id={id} setId={setId} name={name} setName={setName} />} />
            <Route path='/signup' element={<SignUp />} />

            <Route path='/api/login' exact element={<Api />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
