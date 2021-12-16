import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/App.css';
import Login from './pages/Login';
import Editor from './pages/Editor';
import NavBar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
