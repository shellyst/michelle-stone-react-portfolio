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
      img: boats,
      repository: "https://github.com/shellyst/full-stack-ecommerce-1",
      deployed: "/",
    },
    {
      name: "PetBook Social Media",
      description: "A social media app for sharing and liking of pet photos.",
      img: petbook,
      repository: "https://github.com/shellyst/group6-social-media",
      deployed: "https://infinite-escarpment-26658.herokuapp.com/",
    },
    {
      name: "What Should I Watch",
      description:
        "App designed to help users look up movie information and streaming sites using APIs",
      img: watch,
      repository: "https://github.com/shellyst/what-should-i-watch",
      deployed: "https://shellyst.github.io/what-should-i-watch/",
    },
    {
      name: "Photo Portfolio",
      description: "Photo blog to display photos based on category using React",
      img: photoport,
      repository: "https://github.com/shellyst/photo-port",
      deployed:
        "https://github.com/shellyst/photo-port/deployments/activity_log?environment=github-pages",
    },
    {
      name: "Weather App",
      description:
        "React app to accurately predict the weather for any given city",
      img: weather,
      repository: "https://github.com/shellyst/weather-react-app",
      deployed: "https://cocky-minsky-0c314e.netlify.app/",
    },
    {
      name: "Passion Project",
      description: "First ever project using basic HTML and CSS",
      img: passion,
      repository: "https://github.com/shellyst/passion-project",
      deployed: "https://shellyst.github.io/passion-project/",
    },
  ]);

  return (
    <section className="portfolio">
      {projects.map((props) => {
        return (
          <div key={props.name}>
            <h2 className="projects">{props.name}</h2>
            <img src={props.img} className="projectPic" alt="project preview" />
            <h3 className="desc">{props.description}</h3>
            <a href={props.repository}>Github Repo</a>
            <a href={props.link}>Deployed Site</a>
          </div>
        );
      })}
    </section>
  );
}

export default Portfolio;