import React from 'react';
import propTypes from 'prop-types';
function Accessories(props) {
  const accessories = [
    { title: 'golfMask', img: require('../assets/accessories/golf-mask.jpg') },
    {
      title: 'golfNecklace',
      img: require('../assets/accessories/golf-necklace.jpg'),
    },
    { title: 'golfRing', img: require('../assets/accessories/golf-ring.jpg') },
    {
      title: 'noStringsRing',
      img: require('../assets/accessories/no-strings-ring.jpg'),
    },
    {
      title: 'saveTheBeesBandana',
      img: require('../assets/accessories/save-the-bees-bandana.jpg'),
    },
  ];

  return <div className="flex flex-col">{props.createCards(accessories)}</div>;
}

Accessories.propTypes = {
  createCards: propTypes.func,
};

export default Accessories;
