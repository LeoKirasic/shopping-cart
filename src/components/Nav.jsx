import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
      <ul className="flex flex-row space-x-3">
        <Link to="/tops">
          <li>Tops</li>
        </Link>
        <Link to="/bottoms">
          <li>Bottoms</li>
        </Link>
        <Link to="/tees">
          <li>Tees</li>
        </Link>
        <Link to="/accessories">
          <li>Accessories</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
