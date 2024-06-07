import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <Project title="Project 1" image="/path-to-image" deployedLink="link-to-deployed" githubLink="link-to-github" />
    {/* Repeat Project component for each project */}
  </section>
);

export default Portfolio;
