import React from "react";

function Resume() {
  return (
    <div className="resume-section">
      <div className="card">
        <h1 className="skills-sec">Skills & Proficiencies</h1>
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
        <button>
          <a
            className="download-btn"
            href="https://drive.google.com/file/d/1Q4IaTv0Bds8dKu-mhRXYX2Un6rkXJ5Nk/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span>Download my resume!</span>
          </a>
        </button>
        <button>
          <a
            className="linked-btn"
            href="https://www.linkedin.com/in/michelle-cstone/"
            target="_blank"
            rel="noreferrer"
          >
            <span>My LinkedIn</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Resume;
