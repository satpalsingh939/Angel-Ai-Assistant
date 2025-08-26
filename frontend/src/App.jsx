import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import TextAssistant from './pages/TextAssistant';
import VoiceAssistant from './pages/VoiceAssistant';
import About from './pages/About';

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
          {/* <Route path='/voice' element={<VoiceAssistant />} /> */}
        </Routes>
      </div>
    </div>
  );
}
