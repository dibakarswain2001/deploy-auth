import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/login_1.png";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Dibakar Swain </h1>
          <h4>Your Instructor</h4>
          <p>
          Hi there! I'm Dibakar Swain, a dedicated MERN stack developer with a love for creating scalable applications and fostering a learning community. Together, let’s dive into the world of JavaScript, React, Node.js, and more.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/DibakarSwain"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dibakarswain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
