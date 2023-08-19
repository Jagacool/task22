import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">All</Link></li>
        <li><Link to="/full-stack">Full Stack</Link></li>
        <li><Link to="/data-science">Data Science</Link></li>
        <li><Link to="/cyber-security">Cyber Security</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
