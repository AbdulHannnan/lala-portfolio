import React, { useState } from "react";
import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.png";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/shopify.jpg";
import IMG4 from "../../assets/fh-huquq.png";
import IMG5 from "../../assets/candy.jpg"
import IMG6 from "../../assets/fibernet.jpg"
import IMG7 from "../../assets/hospital.jpg"
import IMG8 from "../../assets/SMA.jpg"
import IMG9 from "../../assets/regression.jpg"

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Olympic Analysis",
      category: "ML",
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
      link: " ",
      github: " https://www.linkedin.com/posts/muhammad-zeeshan-9a9298261_shopify-sales-and-customer-funnel-report-activity-7340798505411620865-HP8Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBKvJEBqD24Lfc-tMuyC9ligHInXKDMAOM ",
    },
    {
      id: 5,
      title: "Candy Store Sales Repor",
      category: "PowerBI",
      img: IMG5,
      description:
        "This project uncovers total sales, top 5 products, sales by month and comperative analaysis of target sales etc.",
      technologies: "PowerBI",
      link: " ",
      github: "https://www.linkedin.com/posts/muhammad-zeeshan-9a9298261_data-atomcamp-pakistan-activity-7345161203058388993-8mw3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBKvJEBqD24Lfc-tMuyC9ligHInXKDMAOM ",
    },
     {
      id: 6,
      title: "Fibernet customer Churn",
      category: "SQL",
      img: IMG6,
      description:
        "This project undertake SQL for data analysis approch to find customer churn from a leading Pakistani telecom service provider.",
      technologies: "SQL",
      link: " ",
      github: "https://www.linkedin.com/posts/muhammad-zeeshan-9a9298261_fibernet-customer-churn-case-study-activity-7348694785425059840-UU0G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBKvJEBqD24Lfc-tMuyC9ligHInXKDMAOM ",
    },
      {
      id: 7,
      title: "Hospital Data Analaysis",
      category: "SQL",
      img: IMG7,
      description:
        "This Project undertakes an exploratory data analysis approach in mySQL for healthcare domain data where I track patient record like admit_rate, Diagnosis_clusters and other for predictive modeling of Customer admission to the hospital.",
      technologies: "SQL",
      link: " ",
      github: "https://www.linkedin.com/posts/muhammad-zeeshan-9a9298261_hospital-data-analysis-using-mysql-activity-7351217435896668160-_M6L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBKvJEBqD24Lfc-tMuyC9ligHInXKDMAOM ",
    },
     {
      id: 8,
      title: "SMA-CrossOver Strategy on PEPE Data",
      category: "Python(Quant/Fintech)",
      img: IMG8,
      description:
        "As the name suggests, this project implements a simple SMA-CrossOver Strategy on hourly PEPE dataset to find out whether an SMA strategy is effective in the short run of time.",
      technologies: "Phyton",
      link: " ",
      github: "https://www.linkedin.com/posts/muhammad-zeeshan-9a9298261_data-trading-quant-activity-7356638633891610625-FxKi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBKvJEBqD24Lfc-tMuyC9ligHInXKDMAOM ",
    },
     {
      id: 9,
      title: "Linear Regression on EURUSD Dataset",
      category: "Python(Quant/Fintech)",
      img: IMG9,
      description:
        "This Project uses Machine Learning approach to follow and predict EURUSD prices for a  short period of time to validate the predictive capabilities of Linear Regression on complex forex dataset.",
      technologies: "Phyton",
      link: " ",
      github: "https://www.linkedin.com/posts/muhammad-zeeshan-9a9298261_data-analytics-regression-activity-7363444253684916224-44kJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBKvJEBqD24Lfc-tMuyC9ligHInXKDMAOM ",
    },
  ];

  const [filter, setFilter] = useState("All");

  const categories = ["All", "ML", "Python(Quant/Fintech)", "PowerBI" , "SQL"];

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
