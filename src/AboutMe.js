// src/AboutMe.js
import React from 'react';
import './AboutMe.css'; // You can create a CSS file for styling if needed
import profilePic from './me.jpg';  // Import the image

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <img src={profilePic} alt="Profile" className="profile-pic" /> {/* Use the imported image */}
      <p>
        Hi, I'm Sonu Singh, a data analyst with over 3 years of experience working with data tools such as MS Excel, Power BI, SQL, Python, and Data Science technologies. I’m passionate about uncovering insights from data and transforming them into actionable solutions.
      </p>
      <p>
        I’m also a content creator, and I share my knowledge about data science, AI, and other tech-related topics on my YouTube channel, **LetsTalkAboutData**. I'm constantly exploring new technologies and seeking opportunities to apply my skills in innovative ways.
      </p>
      <p>
        Feel free to browse through my portfolio to see the projects I've worked on, and check out the latest updates in AI and data-driven technologies on this website.
      </p>
    </div>
  );
};

export default AboutMe;
