import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import TextAssistant from './pages/TextAssistant';
import VoiceAssistant from './pages/VoiceAssistant';
import About from './pages/About';
import Member from './pages/Member';
import ForgetPassword from './pages/ForgetPass';
import Profile from './pages/profile';

export default function App() {
  return (
    <div>
      {/* <Nav /> */}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/text' element={<TextAssistant />} />
          <Route path='/voice' element={<VoiceAssistant />} />
          <Route path='/about' element={<About />} />
          <Route path='/member' element={<Member />} />
          <Route path='/forgetPass' element={<ForgetPassword />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/voice' element={<VoiceAssistant />} /> */}
        </Routes>
      </div>
    </div>
  );
}
