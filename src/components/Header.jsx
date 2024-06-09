import React from 'react';
import Navigation from './Navigation';

const Header = () => (
  <header>
    <div className="header-content">
      <img src="/Carlos-images.jpg" alt="Carlos Morales" className="profile-picture" />
      <h1>Carlos's Portfolio</h1>
    </div>
    <Navigation />
  </header>
);

export default Header;
