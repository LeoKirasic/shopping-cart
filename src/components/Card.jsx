import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className=" border-cyan-900 border-2">
      <img src={props.img} alt={props.title} />
      <div>Price: {props.price}</div>
      <button className="border-cyan-900 border-2">Add to cart</button>
    </div>
  );
}

export default Card;

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};
