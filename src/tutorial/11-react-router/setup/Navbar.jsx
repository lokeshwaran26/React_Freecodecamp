import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/people'>People</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
