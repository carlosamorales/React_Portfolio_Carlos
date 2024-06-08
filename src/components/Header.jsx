import React from 'react';
import Navigation from './Navigation';
import profilePicture from '../assets/images/projects/carlos-images.jpg'; // Adjust the path accordingly

const Header = () => (
  <header>
    <div className="header-content">
      <img src={profilePicture} alt="Carlos Morales" className="profile-picture" />
      <h1>Carlos's Portfolio</h1>
    </div>
    <Navigation />
  </header>
);

export default Header;
