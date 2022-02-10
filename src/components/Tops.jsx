import React from 'react';
import PropTypes from 'prop-types';

function Tops(props) {
  const tops = [
    {
      title: 'basicLogoCrewneck',
      img: require('../assets/tops/basic-logo-crewneck.jpg'),
    },
    {
      title: 'basicLogoHoodie',
      img: require('../assets/tops/basic-logo-hoodie.jpg'),
    },
    {
      title: 'logoHoodie',
      img: require('../assets/tops/logo-hoodie.jpg'),
    },
    {
      title: 'miniLogoCrewneck',
      img: require('../assets/tops/mini-logo-crewneck.jpg'),
    },
    {
      title: 'multiLogoHoodie',
      img: require('../assets/tops/multi-logo-hoodie.jpg'),
    },
    {
      title: 'saveTheBeesHoodie',
      img: require('../assets/tops/save-the-bees-hoodie.jpg'),
    },
  ];
  return <div className="flex flex-col">{props.createCards(tops)}</div>;
}

Tops.propTypes = {
  createCards: PropTypes.func,
  cardList: PropTypes.array,
};

export default Tops;
