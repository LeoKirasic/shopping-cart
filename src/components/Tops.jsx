import React from 'react';
import PropTypes from 'prop-types';

function Tops(props) {
  const tops = [
    {
      title: 'Basic Logo Crewneck',
      img: require('../assets/tops/basic-logo-crewneck.jpg'),
      price: 100,
    },
    {
      title: 'Basic Logo Hoodie',
      img: require('../assets/tops/basic-logo-hoodie.jpg'),
      price: 100,
    },
    {
      title: 'Logo Hoodie',
      img: require('../assets/tops/logo-hoodie.jpg'),
      price: 100,
    },
    {
      title: 'Mini Logo Crewneck',
      img: require('../assets/tops/mini-logo-crewneck.jpg'),
      price: 90,
    },
    {
      title: 'Multi Logo Hoodie',
      img: require('../assets/tops/multi-logo-hoodie.jpg'),
      price: 90,
    },
    {
      title: 'Save The Bees Hoodie',
      img: require('../assets/tops/save-the-bees-hoodie.jpg'),
      price: 90,
    },
  ];
  return <div className="flex flex-col">{props.createCards(tops)}</div>;
}

Tops.propTypes = {
  createCards: PropTypes.func,
  cardList: PropTypes.array,
};

export default Tops;
