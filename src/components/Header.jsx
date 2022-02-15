import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return <div className=''>
    <div>GOLF</div>
    <Link to="/cart">
    <img className=' w-8 absolute top-1 right-3' src={require('../assets/header/shopping-bag.png')} alt="" />
    </Link>
  </div>;
}

export default Header;
