import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  function addItemToCart() {
    props.modifyCartItemsState(props);
  }
  return (
    <div className=" border-cyan-900 border-2">
      <img src={props.img} alt={props.title} />
      <div>Price: {props.price}</div>
      <button onClick={addItemToCart} className="border-cyan-900 border-2">
        Add to cart
      </button>
    </div>
  );
}

export default Card;

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  modifyCartItemsState: PropTypes.func,
};
