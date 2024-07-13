import { useState, useEffect } from "react";
import LogoFirstName from "../../assets/images/firstname.svg";
import LogoLastName from "../../assets/images/lastname.svg";
import "./index.scss";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import portrait from "../../assets/images/portrait.png";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const firstnameArray = ["l", "e", "x"];
  const lastnameArray = ["o", "r", "r", "o", "w"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <div className="d-inline wor me-4">
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _15`}>i,</span>
            </div>
            <div className="d-inline word">
              <span className={`${letterClass} _16`}>I</span>
              <span className={`${letterClass} _17`}>'m</span>
            </div>
            <br />
            <div className="d-inline word">
              <img src={LogoFirstName} alt="First letter of my name stylized" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={firstnameArray}
                idx={18}
              />
            </div>
            <div className="d-inline word">
              <img
                src={LogoLastName}
                alt="First letter of my last name stylized"
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={lastnameArray}
                idx={21}
              />
            </div>
          </h1>
          <h2>Aspiring Software Developer</h2>
          <Link
            className="btn btn-primary btn-lg mt-5"
            to="/my-portfolio/contact"
          >
            CONTACT ME
          </Link>
        </div>
        <div className="portrait-container text-center">
          <img src={portrait} className="portrait" alt="self portrait" />
        </div>
      </div>

      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};

export default Home;
