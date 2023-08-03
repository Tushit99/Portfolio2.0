import React, { useContext } from "react";
import style from "./Home.module.css";
import { Heading, Stack, Switch } from "@chakra-ui/react";
import { ThemeContext } from "../../context/Contextprovider";
import day from "./imgbox/daypart.jpg";
import night from "./imgbox/nightpart.jpg";
import video from "./imgbox/ezgif-1-1f62b52b52.gif"


const Home = ({ home }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={style.home} ref={home} style={{ backgroundImage: `url(${theme ? day : night})` }}>
      <div className={style.back} >
        <div className={style.box} style={{ color: "white" }}>
          <div id={style.homeintro}>
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
            <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&pause=1000&color=FFFFFF&center=true&vCenter=true&width=435&lines=Full+Stack+Web+Developer;MERN+Stack+Developer" alt="" />
          </div>
          <h4 className={style.h4}>
            I am a Full Stack Developer, passionate about building digital
            products that improve everyday experience for people.
            <span>
              I love to work on exciting projects that test what I've learnt,
              whilst being exposed to the power and potential of the
              ever-evolving technologies around us.
            </span>
            I have a specialization in developing websites and web applications
            using HTML, CSS, JavaScript, React, and Node.js.
          </h4>
        </div>
        <div className={style.box2}>
          <img src={video} alt="animeboy" /> 
        </div>
      </div>
      <div className={style.switchbox}>
        <Stack align="center" direction="row" >
          <Switch colorScheme="blackAlpha" onChange={() => toggleTheme()} size="lg" />
        </Stack>
      </div>
    </div>
  );
};

export default Home;
