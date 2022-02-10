import React from 'react';
import propTypes from 'prop-types';

function Bottoms(props) {
  const bottoms = [
    {
      title: 'basicLogoSweatpants',
      img: require('../assets/bottoms/basic-logo-sweatpants.jpg'),
    },
    {
      title: 'logoBoxersBriefs',
      img: require('../assets/bottoms/logo-boxers-briefs.jpg'),
    },
    { title: 'logoBoxers', img: require('../assets/bottoms/logo-boxers.jpg') },
    {
      title: 'logoSweatpants',
      img: require('../assets/bottoms/logo-sweatpants.jpg'),
    },
    {
      title: 'logoSweatshorts',
      img: require('../assets/bottoms/logo-sweatshorts.jpg'),
    },
    {
      title: 'multiLogoSweatpants',
      img: require('../assets/bottoms/multi-logo-sweatpants.jpg'),
    },
  ];
  return <div className="flex flex-col">{props.createCards(bottoms)}</div>;
}
Bottoms.propTypes = {
  createCards: propTypes.func,
};
export default Bottoms;
