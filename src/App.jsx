import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Tops from './components/Tops';
import Tees from './components/Tees';
import Bottoms from './components/Bottoms';
import Accessories from './components/Accessories';
import Card from './components/Card';
import CartCard from './components/CartCard';

import Cart from './components/Cart';
function App() {
  const [cartItems, setCartItems] = useState([]);

  function modifyCartItemsState(item) {
    const updatedItems = [...cartItems, item];

    setCartItems(updatedItems);
  }

  function createCards(array) {
    const cardList = array.map((card) => (
      <Card
        key={card.title}
        title={card.title}
        img={card.img}
        price={card.price}
        modifyCartItemsState={modifyCartItemsState}
      />
    ));
    return cardList;
  }
  function createCartCards(array) {
    const cardList = array.map((card) => (
      <CartCard
        key={card.title}
        title={card.title}
        img={card.img}
        price={card.price}
      />
    ));
    return cardList;
  }
  return (
    <Router>
      <div className="flex flex-col items-center">
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Tops createCards={createCards} />}></Route>
          <Route
            path="/tops"
            element={<Tops createCards={createCards} />}
          ></Route>
          <Route
            path="/tees"
            element={<Tees createCards={createCards} />}
          ></Route>
          <Route
            path="/bottoms"
            element={<Bottoms createCards={createCards} />}
          ></Route>
          <Route
            path="/accessories"
            element={<Accessories createCards={createCards} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart items={cartItems} createCards={createCartCards}></Cart>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
