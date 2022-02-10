import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <img
      className="border-cyan-800 border-2"
      src={props.img}
      alt={props.title}
    />
  );
}

export default Card;

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};
