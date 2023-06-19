import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/" activeClassName="active">
        Rockets
      </NavLink>
      <NavLink to="/missions" activeClassName="active">
        Missions
      </NavLink>
      <NavLink to="/profile" activeClassName="active">
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default Header;
