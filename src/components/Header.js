import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css';
import planet from '../assets/planet.png';

const Header = () => (
  <>
    <header>
      <nav>
        <div className="logo">
          <img src={planet} alt="planet" />
          <span className="title">Space Travelers&apos; Hub</span>
        </div>
        <div className="links">
          <NavLink to="/" activeclassname="active">
            Rockets
          </NavLink>
          <NavLink to="/missions" activeclassname="active">
            Missions
          </NavLink>
          <span className="line" />
          <NavLink to="/profile" activeclassname="active">
            My Profile
          </NavLink>
        </div>
      </nav>
    </header>
    <hr />
  </>
);

export default Header;
