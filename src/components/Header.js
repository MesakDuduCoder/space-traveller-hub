import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/" activeclassname="active">
        Rockets
      </NavLink>
      <NavLink to="/missions" activeclassname="active">
        Missions
      </NavLink>
      <NavLink to="/profile" activeclassname="active">
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default Header;
