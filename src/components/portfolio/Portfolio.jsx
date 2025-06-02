import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.png";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/shopify.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Olympic Analaysis",
      img: IMG1,
      description:
        "This project delves into uncovering insights about the history of Olympics and Olympics accomplishments Sports-wise, Country-wise and Players-wise.",
      technologies: "Pandas | Numpy | Streamlit",
      link: "https://olympic-pa3t.onrender.com/",
      github: "https://github.com/Aflaaaton/Olympic",
    },
    {
      id: 2,
      title: "Movie Recommender System",
      img: IMG4,
      description:
        "In this project, I have applied Machine learning algorithm to classify movies according to the person's historical watch pattern. It then recommends those movies to the person",
      technologies: "Machine learning | Python",
      link: "https://movie-recommender-system-twz0.onrender.com/",
      github: "https://github.com/Aflaaaton/MovieRecommenderSystem",
    },
    {
      id: 3,
      title: "SMS Spam Detection System",
      img: IMG2,
      description: "This is a Machine learning based project that utilizes an SMS dataset acquired from Kaggle. I have applied Machine learning algorithm to detect Spam versus Non-spam messages",
      technologies: "Machine Learning | Python | Streamli",
      link: "https://spam-classification-ni69.onrender.com/",
      github: "https://github.com/Aflaaaton/SpamClassification",
    },
  
    {
      id: 4,
      title: "Shopify Analaysis",
      img: IMG3,
      description:
        "PowerBI based Shopify sales and customer funnel analysis",
      technologies: "PowerBI",
      // link: "https://alpha-agency-project.vercel.app/",
      // github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    },
    ];
  //   {
  //     id: 5,
  //     title: "Jokes Project with Typescript",
  //     img: IMG5,
  //     description:
  //       "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
  //     technologies: "Html | Styled-components | Typescript",
  //     link: "https://jokes-project.vercel.app/",
  //     github: "https://github.com/Rasif-Taghizada/Joke-App",
  //   },
  //   {
  //     id: 6,
  //     title: "Fs Poster Website",
  //     img: IMG6,
  //     description:
  //       "Real-world group project which is still in progress and will provide educational platform for future young developers",
  //     technologies: "Html | Scss | Javascript",
  //     link: "https://fs-poster-project.vercel.app/",
  //     github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
  //   },
  // ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
