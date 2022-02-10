import React from 'react';
import propTypes from 'prop-types';
function Tees(props) {
  const tees = [
    {
      title: 'championshipTee',
      img: require('../assets/tees/championship-tee.jpg'),
    },
    {
      title: 'logoTee',
      img: require('../assets/tees/logo-tee.jpg'),
    },
    {
      title: 'multiLogoTee',
      img: require('../assets/tees/multi-logo-tee.jpg'),
    },
    {
      title: 'multiSmallLogoTee',
      img: require('../assets/tees/multi-small-logo-tee.jpg'),
    },
    {
      title: 'saveTheBeesTee',
      img: require('../assets/tees/save-the-bees-tee.jpg'),
    },
  ];

  return <div className="">{props.createCards(tees)}</div>;
}

Tees.propTypes = {
  createCards: propTypes.func,
};

export default Tees;
