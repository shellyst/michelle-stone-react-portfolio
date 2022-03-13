import React from "react";
import profilePic from "../../assets/images/profile-pic.jpeg";

function About() {
  return (
    <section>
      <h1 id="about">Meet Michelle</h1>
      <div className="profile-pic">
        <img alt="student portrait" src={profilePic} />
      </div>
      <div className="about">
        <p id="about-me">Information will go here!</p>
      </div>
    </section>
  );
}

export default About;
