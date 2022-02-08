import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Tops from './components/Tops';
import Tees from './components/Tees';
import Socks from './components/Socks';
import Hats from './components/Hats';
import Bottoms from './components/Bottoms';
import Accessories from './components/Accessories';
function App() {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path="/tops" element={<Tops />}></Route>
          <Route path="/tees" element={<Tees />}></Route>
          <Route path="/socks" element={<Socks />}></Route>
          <Route path="/hats" element={<Hats />}></Route>
          <Route path="/bottoms" element={<Bottoms />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
