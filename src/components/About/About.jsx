import React, { useContext } from "react";
import abt from "./About.module.css";
import { Heading } from "@chakra-ui/react";
import resumeme from "../Image/resumeme.pdf";
import mypic from "../Image/tushitgo.png";
import { ThemeContext } from "../../context/Contextprovider";
import bgimg from "../Image/box.png"

const About = ({ about }) => {
  const { theme } = useContext(ThemeContext);

  const handleOpenLink = () => {
    window.open(
      "https://drive.google.com/file/d/1QDtKhJGLNZtCdd9Ia-8mJ1tMNs5fm-hg/view?usp=sharing"
    );
  };

  return (
    <div id="about" ref={about}  >
      <div className={abt.box}>
        <h5> Get to Know </h5>
        <Heading as="h2" size="2xl" fontWeight={400}>
          About
        </Heading>
        <div className={abt.main}>
          <div className={abt.aboutdetail}>
            <p style={{ color: theme ? "black" : "white" }}>
              I'm a Full Stack Web Developer living in Jamshedpur, Jharkhand,
              with expertise in MERN stack, JavaScript, MongoDB, Frontend, and
              Backend development. I'm proficient in Java and SQL as well. My
              experience includes working with NodeJS, HTML, CSS, and Express
              frameworks to create visually appealing and functional
              applications. I'm always eager to learn new technologies and
              improve my skills, making me a valuable asset to any team. If
              you're looking for someone to help bring your ideas to life, I'd
              love to work with you!
            </p>
            <div className={abt.buttonbox}>
              <div class={abt.container}>
                <button className={abt.butn} onClick={handleOpenLink}>
                  <a href={resumeme} target="_blank" download={"Tushit_Saxena_resume"} >Resume</a>
                </button>
              </div>
            </div>
          </div>
          <div className={abt.picspace} >
            <img src={bgimg} alt="backimg" className={abt.profileback} />
            <div className={abt.circle}>
              <img
                src={mypic}
                id={abt.im2}
                className="home-img"
                alt="myimages"
              />
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
