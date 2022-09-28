import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Packages from './pages/Packages/Packages';
import Contact from './pages/Contact/Contact';
import Booking from './pages/Book/Booking';
import './styles/style.scss'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component element={<Home />} />
          <Route path="/packages" exact component element={<Packages />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
