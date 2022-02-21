import React, { useState } from 'react';
import propTypes from 'prop-types';
function Tees(props) {
  const [tees, setTees] = useState([
    {
      title: 'Championship Tee',
      img: require('../assets/tees/championship-tee.jpg'),
      price: 40,
      amount: 1,
    },
    {
      title: 'Logo Tee',
      img: require('../assets/tees/logo-tee.jpg'),
      price: 35,
      amount: 1,
    },
    {
      title: 'Multi Logo Tee',
      img: require('../assets/tees/multi-logo-tee.jpg'),
      price: 35,
      amount: 1,
    },
    {
      title: 'Multi Small Logo Tee',
      img: require('../assets/tees/multi-small-logo-tee.jpg'),
      price: 35,
      amount: 1,
    },
    {
      title: 'Save The Bees Tee',
      img: require('../assets/tees/save-the-bees-tee.jpg'),
      price: 40,
      amount: 1,
    },
  ]);

  return <div className="">{props.createCards(tees)}</div>;
}

Tees.propTypes = {
  createCards: propTypes.func,
};

export default Tees;
