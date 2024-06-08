import React from 'react';
import Project from '../components/Project';
import serverSideApiImage from '../assets/images/projects/server-side-api.jpg';
import eCommerceImage from '../assets/images/projects/e-commerce.jpg';

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <Project 
      title="Server-Side API" 
      image={serverSideApiImage} 
      deployedLink="https://example.com/server-side-api" 
      githubLink="https://github.com/carlosamorales/Weather--Dashboard-Carlos-Challenge6-Server-Side-APIs" 
    />
    <Project 
      title="E-Commerce Site" 
      image={eCommerceImage} 
      deployedLink="https://example.com/e-commerce" 
      githubLink="https://github.com/carlosamorales/Carlos-E-Commerce-Back-Object-Relational-Mapping-ORM-End-"
    />
    {/* Add more Project components as needed */}
  </section>
);

export default Portfolio;
