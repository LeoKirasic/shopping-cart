import React, { useState } from 'react';
import propTypes from 'prop-types';

function Bottoms(props) {
  const [bottoms, setBottoms] = useState([
    {
      title: 'Basic Logo Sweatpants',
      img: require('../assets/bottoms/basic-logo-sweatpants.jpg'),
      price: 90,
      amount: 1,
    },
    {
      title: 'Logo Boxers Briefs',
      img: require('../assets/bottoms/logo-boxers-briefs.jpg'),
      price: 45,
      amount: 1,
    },
    {
      title: 'Logo Boxers',
      img: require('../assets/bottoms/logo-boxers.jpg'),
      price: 45,
      amount: 1,
    },
    {
      title: 'Logo Sweatpants',
      img: require('../assets/bottoms/logo-sweatpants.jpg'),
      price: 90,
      amount: 1,
    },
    {
      title: 'Logo Sweatshorts',
      img: require('../assets/bottoms/logo-sweatshorts.jpg'),
      price: 70,
      amount: 1,
    },
    {
      title: 'Multi Logo Sweatpants',
      img: require('../assets/bottoms/multi-logo-sweatpants.jpg'),
      price: 90,
      amount: 1,
    },
  ]);
  return <div className="flex flex-col">{props.createCards(bottoms)}</div>;
}
Bottoms.propTypes = {
  createCards: propTypes.func,
};
export default Bottoms;
