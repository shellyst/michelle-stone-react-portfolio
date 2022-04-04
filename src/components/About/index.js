import React from "react";
import profilePic from "../../assets/images/profile-pic.jpg";

function About() {
  return (
    <section>
      <h1 id="about">Meet Michelle</h1>
      <div className="profile-pic">
        <img className="portrait" alt="student portrait" src={profilePic} />
      </div>
      <div className="about">
        <p id="aboutMe">Hello, and welcome to my page! </p>
        <br></br>
        <p id="aboutMe">
          After working in the legal industry for several years, I came to
          realize that I had a strong interest in coding and web development.
          Thinking back to how much I had enjoyed learning HTML and CSS for fun,
          I decided to pursue a new career as a full-stack web developer.
        </p>
        <br></br>
        <p id="aboutMe">
          Over the past year, I took a few self-taught classes, and finally
          enrolled in the University of Toronto Coding Bootcamp. Throughout my
          coding journey, I have realized this is my passion, and have worked
          hard to solidify my knowledge of both front and back end web
          development. As a new web developer, I look forward to building my
          career, while never taking a break from learning new skills!
        </p>
      </div>
    </section>
  );
}

export default About;
