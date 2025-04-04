import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing the CSS file for styling
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
