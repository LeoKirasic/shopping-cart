import React, { useState } from 'react';
import propTypes from 'prop-types';
function Accessories(props) {
  const [accessories, setAccessorie] = useState([
    {
      title: 'Golf Mask',
      img: require('../assets/accessories/golf-mask.jpg'),
      price: 30,
      amount: 1,
    },
    {
      title: 'Golf Necklace',
      img: require('../assets/accessories/golf-necklace.jpg'),
      price: 60,
      amount: 1,
    },
    {
      title: 'Golf Ring',
      img: require('../assets/accessories/golf-ring.jpg'),
      price: 60,
      amount: 1,
    },
    {
      title: 'No Strings Ring',
      img: require('../assets/accessories/no-strings-ring.jpg'),
      price: 60,
      amount: 1,
    },
    {
      title: 'Save Th eBees Bandana',
      img: require('../assets/accessories/save-the-bees-bandana.jpg'),
      price: 10,
      amount: 1,
    },
  ]);

  return <div className="flex flex-col">{props.createCards(accessories)}</div>;
}

Accessories.propTypes = {
  createCards: propTypes.func,
};

export default Accessories;
