import React from 'react';
import propTypes from 'prop-types';
function Accessories(props) {
  const accessories = [
    {
      title: 'golfMask',
      img: require('../assets/accessories/golf-mask.jpg'),
      price: 30,
    },
    {
      title: 'golfNecklace',
      img: require('../assets/accessories/golf-necklace.jpg'),
      price: 60,
    },
    {
      title: 'golfRing',
      img: require('../assets/accessories/golf-ring.jpg'),
      price: 60,
    },
    {
      title: 'noStringsRing',
      img: require('../assets/accessories/no-strings-ring.jpg'),
      price: 60,
    },
    {
      title: 'saveTheBeesBandana',
      img: require('../assets/accessories/save-the-bees-bandana.jpg'),
      price: 10,
    },
  ];

  return <div className="flex flex-col">{props.createCards(accessories)}</div>;
}

Accessories.propTypes = {
  createCards: propTypes.func,
};

export default Accessories;
