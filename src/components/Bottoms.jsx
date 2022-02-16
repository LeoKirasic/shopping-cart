import React from 'react';
import propTypes from 'prop-types';

function Bottoms(props) {
  const bottoms = [
    {
      title: 'basicLogoSweatpants',
      img: require('../assets/bottoms/basic-logo-sweatpants.jpg'),
      price: 90,
    },
    {
      title: 'logoBoxersBriefs',
      img: require('../assets/bottoms/logo-boxers-briefs.jpg'),
      price: 45,
    },
    {
      title: 'logoBoxers',
      img: require('../assets/bottoms/logo-boxers.jpg'),
      price: 45,
    },
    {
      title: 'logoSweatpants',
      img: require('../assets/bottoms/logo-sweatpants.jpg'),
      price: 90,
    },
    {
      title: 'logoSweatshorts',
      img: require('../assets/bottoms/logo-sweatshorts.jpg'),
      price: 70,
    },
    {
      title: 'multiLogoSweatpants',
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
