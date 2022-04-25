import React, { useState } from "react";
import petbook from "../../assets/images/petbook.png";
import watch from "../../assets/images/group.png";
import photoport from "../../assets/images/photo-portfolio.png";
import weather from "../../assets/images/weather.png";
import passion from "../../assets/images/passionproject.png";
import boats from "../../assets/images/boats.png";

// TO DO: Get screenshots of 4-6 projects.

function Portfolio() {
  const [projects] = useState([
    {
      name: "Boats Boats Boats - E-Commerce",
      description:
        "A React based web application for selling (mock) luxury yachts!",
      technologies: "HTML, CSS, React.js, Express.js, MongoDB.",
      img: boats,
      repository: "https://github.com/shellyst/full-stack-ecommerce-1",
      deployed: "/",
    },
    {
      name: "PetBook Social Media",
      description: "A social media app for sharing and liking of pet photos.",
      technologies:
        "HTML, CSS, Javascript, Node.js, Express.js, SQL, Handlebars.js.",
      img: petbook,
      repository: "https://github.com/shellyst/group6-social-media",
      deployed: "https://infinite-escarpment-26658.herokuapp.com/",
    },
    {
      name: "What Should I Watch",
      description:
        "App designed to help users look up movie information and streaming sites using APIs",
      img: watch,
      technologies: "HTML, CSS, Javascript, Node.js, Third-Part APIs.",
      repository: "https://github.com/shellyst/what-should-i-watch",
      deployed: "https://shellyst.github.io/what-should-i-watch/",
    },

    {
      name: "Weather App",
      description:
        "React app to accurately predict the weather for any given city, and provide an accurate 5-day forecast.",
      img: weather,
      technologies: "HTML, CSS, React.js, APIs.",
      repository: "https://github.com/shellyst/weather-react-app",
      deployed: "https://cocky-minsky-0c314e.netlify.app/",
    },
  ]);

  return (
    <section className="portfolio">
      {projects.map((props) => {
        return (
          <div className="card-body">
            <div key={props.name}>
              <h2 className="projects">{props.name}</h2>
              <img
                src={props.img}
                className="projectPic"
                alt="project preview"
              />
              <p className="descs">{props.description}</p>
              <a href={props.repository}>
                <button>Github Repo</button>
              </a>
              <a href={props.link}>
                <button>Deployed Site</button>
              </a>
              <p className="techs">{props.technologies}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Portfolio;
