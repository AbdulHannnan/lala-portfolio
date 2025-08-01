import React, { useState } from "react";
import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.png";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/shopify.jpg";
import IMG4 from "../../assets/fh-huquq.png";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Olympic Analysis",
      category: "Streamlit",
      img: IMG1,
      description:
        "Uncovering insights about the history of Olympics accomplishments Sports-wise, Country-wise and Players-wise.",
      technologies: "Pandas | Numpy | Streamlit",
      link: "https://olympic-pa3t.onrender.com/",
      github: "https://github.com/Aflaaaton/Olympic",
    },
    {
      id: 2,
      title: "Movie Recommender System",
      category: "ML",
      img: IMG4,
      description:
        "ML algorithm to classify movies according to watch history and recommend suitable content.",
      technologies: "Machine learning | Python",
      link: "https://movie-recommender-system-twz0.onrender.com/",
      github: "https://github.com/Aflaaaton/MovieRecommenderSystem",
    },
    {
      id: 3,
      title: "SMS Spam Detection System",
      category: "ML",
      img: IMG2,
      description:
        "Machine learning based SMS classifier that detects spam vs non-spam messages.",
      technologies: "Machine Learning | Python | Streamlit",
      link: "https://spam-classification-ni69.onrender.com/",
      github: "https://github.com/Aflaaaton/SpamClassification",
    },
    {
      id: 4,
      title: "Shopify Analysis",
      category: "PowerBI",
      img: IMG3,
      description:
        "PowerBI based Shopify sales and customer funnel analysis.",
      technologies: "PowerBI",
    },
  ];

  const [filter, setFilter] = useState("All");

  const categories = ["All", "ML", "Streamlit", "PowerBI"];

  const filteredProjects =
    filter === "All"
      ? soloProjects
      : soloProjects.filter((proj) => proj.category === filter);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* Filter Bar */}
      <div className="portfolio__filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter__btn ${filter === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="container portfolio__container">
        {filteredProjects.map((pro) => (
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
              {pro.github && (
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
              {pro.link && (
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
