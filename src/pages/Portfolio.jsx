import React from 'react';
import Project from '../components/Project';
import serverSideApiImage from '../assets/images/projects/server-side-api.jpg';
import eCommerceImage from '../assets/images/projects/e-commerce.jpg';
import noteTakerImage from '../assets/images/projects/Carlos-Note-Taker.jpg';
import timedQuizImage from '../assets/images/projects/Carlos-Timed-Quiz.jpg';
import textEditorImage from '../assets/images/projects/Text-Editor.jpg';
import workDaySchedulerImage from '../assets/images/projects/Work-Day-Scheduler.jpg';

const Portfolio = () => (
  <section className="portfolio">
    <h2>Portfolio</h2>
    <div className="project-grid">
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
      <Project 
        title="Note Taker" 
        image={noteTakerImage} 
        deployedLink="https://limitless-citadel-06559-6de1f12aff8e.herokuapp.com/" 
        githubLink="https://github.com/carlosamorales/Carlos-Note-Taker-Challenge11" 
      />
      <Project 
        title="Timed Quiz" 
        image={timedQuizImage} 
        deployedLink="https://carlosamorales.github.io/Carlos-Timed-Quiz/" 
        githubLink="https://github.com/carlosamorales/Carlos-Timed-Quiz" 
      />
      <Project 
        title="Text Editor" 
        image={textEditorImage} 
        deployedLink="https://example.com/text-editor" 
        githubLink="https://github.com/carlosamorales/Progressive-Web-Applications-PWA-Text-Editor-Carlos-Challenge-19" 
      />
      <Project 
        title="Work Day Scheduler" 
        image={workDaySchedulerImage} 
        deployedLink="https://carlosamorales.github.io/Carlos-Work-Day-Scheduler/" 
        githubLink="https://github.com/carlosamorales/Carlos-Work-Day-Scheduler" 
      />
    </div>
  </section>
);

export default Portfolio;
