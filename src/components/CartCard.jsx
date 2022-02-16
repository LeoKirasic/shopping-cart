import React from 'react';
import PropTypes from 'prop-types';

function CartCard(props) {
  return (
    <div className=" border-cyan-900 border-2">
      <div>Title: {props.title}</div>
      <div>Price: {props.price}</div>
    </div>
  );
}

export default CartCard;

CartCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
};
