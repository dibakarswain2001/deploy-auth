import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/profile.png";

import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        <h4>Hello, {user ? user.name : "Developer"}</h4>
        <h1>Welcome to MERN Authentication</h1>
        <p>
          Here we are doing complete authentication using
          MERN stack with complete OTP verification via email or phone by using Twilio and Nodemailer.
        </p>
      </div>
    </>
  );
};

export default Hero;
