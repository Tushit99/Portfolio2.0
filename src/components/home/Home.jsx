import React, { useContext, useState } from "react";
import style from "./Home.module.css";
import { Box, Heading, Stack, Switch } from "@chakra-ui/react";
import { ThemeContext } from "../../context/Contextprovider";
import img from "../../img/anboy.png";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <img className={style.backimage} src={theme
           ? 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
           : 'https://wallpaperaccess.com/full/191364.jpg'} alt="" />
      <div
        className={style.back}
      // style={{
      //   backgroundImage: theme
      //     ? "url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      //     : "url('https://wallpaperaccess.com/full/191364.jpg')",
      // }}
      >
        <div className={style.box} style={{ color: theme ? "black" : "white" }}>
          <Heading as="h4" size="md" className={style.animate} fontWeight={400}>
            Hello I'm
          </Heading>
          <Heading
            as="h2"
            id="user-detail-name"
            size="2xl"
            className={style.animate}
            fontWeight={400}
          >
            TUSHIT SAXENA
          </Heading>
          <img
            src={
              theme
                ? "https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&pause=1000&color=000000&center=true&vCenter=true&width=435&lines=Full+Stack+Web+Developer;MERN+Stack+Developer"
                : "https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&pause=1000&color=FFFFFF&center=true&vCenter=true&width=435&lines=Full+Stack+Web+Developer;MERN+Stack+Developer"
            }
            alt="Typing SVG"
          />
          <h4 className={style.h4}>
            I am a Full Stack Developer, passionate about building digital
            products that improve everyday experience for people.
            <span>
              {" "}
              I love to work on exciting projects that test what I've learnt,
              whilst being exposed to the power and potential of the
              ever-evolving technologies around us.
            </span>{" "}
            I have a specialization in developing websites and web applications
            using HTML, CSS, JavaScript, React, and Node.js.
          </h4>
        </div>
        <div className={style.box2}>
          <img src={img} alt="animeboy" />
        </div>
      </div>
      <div className={style.switchbox}>
        <Stack align="center" direction="row">
          <Switch colorScheme="blackAlpha" onChange={() => toggleTheme()} size="lg" />
        </Stack>
      </div>
    </div>
  );
};

export default Home;
