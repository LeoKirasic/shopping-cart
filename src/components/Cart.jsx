import React from 'react';
import PropTypes from 'prop-types';
function Cart(props) {
  console.log(props);
  return <div>{props.createCards(props.items)}</div>;
}

Cart.propTypes = {
  items: PropTypes.array,
  createCards: PropTypes.func,
};

export default Cart;
