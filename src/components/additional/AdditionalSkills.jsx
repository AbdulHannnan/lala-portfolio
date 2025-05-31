import "./additionalSkills.css";
import hrBadge from "../../assets/hrBadge.jpg"; // 🔁 Replace with actual image name and path
// import leetCodeBadge from "../../assets/leetcode_badge.png"; // Optional if you have
// import dsaBadge from "../../assets/dsa_badge.png"; // Optional

const AdditionalSkills = () => {
  return (
    <section id="additional-skills">
      <h5>Explore More</h5>
      <h2>Additional Skills</h2>

      <div className="container skills__container">
        <div className="skills__cards">

          <article className="skills__card">
            <div className="skills__image">
              <img src={hrBadge} alt="HackerRank Badge" />
            </div>
            <h5>HackerRank</h5>
            <small>Problem Solving (Gold Badge)</small>
          </article>

          {/* <article className="skills__card">
            <div className="skills__image">
              <img src={dsaBadge} alt="DSA Badge" />
            </div>
            <h5>Data Structures</h5>
            <small>DSA in C++ - Ongoing</small>
          </article> */}

          {/* <article className="skills__card">
            <div className="skills__image">
              <img src={leetCodeBadge} alt="LeetCode Badge" />
            </div>
            <h5>LeetCode</h5>
            <small>150+ Problems Solved</small>
          </article> */}

        </div>

        <p>
          I'm constantly upgrading my skills by solving coding problems on HackerRank, LeetCode, and more. I love to learn, build, and improve every day.
        </p>

        <a href="#contact" className="btn btn-primary">Let's Connect</a>
      </div>
    </section>
  );
};

export default AdditionalSkills;
