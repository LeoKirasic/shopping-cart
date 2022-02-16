import React from 'react';
import propTypes from 'prop-types';

function Bottoms(props) {
  const bottoms = [
    {
      title: 'Basic Logo Sweatpants',
      img: require('../assets/bottoms/basic-logo-sweatpants.jpg'),
      price: 90,
    },
    {
      title: 'Logo Boxers Briefs',
      img: require('../assets/bottoms/logo-boxers-briefs.jpg'),
      price: 45,
    },
    {
      title: 'Logo Boxers',
      img: require('../assets/bottoms/logo-boxers.jpg'),
      price: 45,
    },
    {
      title: 'Logo Sweatpants',
      img: require('../assets/bottoms/logo-sweatpants.jpg'),
      price: 90,
    },
    {
      title: 'Logo Sweatshorts',
      img: require('../assets/bottoms/logo-sweatshorts.jpg'),
      price: 70,
    },
    {
      title: 'Multi Logo Sweatpants',
      img: require('../assets/bottoms/multi-logo-sweatpants.jpg'),
      price: 90,
    },
  ];
  return <div className="flex flex-col">{props.createCards(bottoms)}</div>;
}
Bottoms.propTypes = {
  createCards: propTypes.func,
};
export default Bottoms;
