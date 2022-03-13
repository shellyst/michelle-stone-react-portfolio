import React from "react";

// TO DO: Get screenshots of 4-6 projects.

function Portfolio() {
    const [projects] = useState({
        {
            name: "PetBook Social Media",
            description: "A social media app for sharing and liking of pet photos.",
            // img: petbook, 
            repository: "",
            deployed: ""
        },
        {
            name: "What Should I Watch",
            description: "App designed to help users look up movie information and streaming sites using APIs",
            // img: watch
            repository: "",
            deployed: ""
        },
        {
            name: "Photo Portfolio",
            description: "Photo blog to display photos based on category using React",
            // img: photoport,
            repository: "",
            deployed: ""
        },
        {
            name: "Weather App",
            description: "React app to accurately predict the weather for any given city",
            // img: weather,
            repository: "",
            deployed: "",
        },
        {
            name: "Passion Project",
            description: "First ever project using basic HTML and CSS",
            // img: passion,
            repository: "",
            deployed: ""
        }
    })
return (
    <section className="portfolio">Portfolio Content Here</section>
);
}

export default Portfolio;
