import React from "react";

function Resume() {
  return (
    <div className="resume-section">
      <div className="column">
        <h1>Skills & Proficiencies</h1>
        <p className="skills">Full-Stack</p>
        <ul>
          <li>HTML, CSS, Javascript</li>
          <li>Git, Github, Heroku</li>
          <li>Express.js, Node.js</li>
          <li>MySQL, NoSQL, JawsDB, MongoDB</li>
          <li>React</li>
        </ul>
      </div>
      <div className="column">
        <h1>My Resume!</h1>
        <p>Downloadable Resume goes here.</p>
        <a
          className="download-btn"
          href="https://drive.google.com/file/d/1QfMEi4OzZJ87l52_oUhZxzV93GGP3pkP/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fa-solid fa-arrow-down-to-bracket"></i>
          </span>
          <span>Download my resume!</span>
        </a>
      </div>
    </div>
  );
}

export default Resume;
