import React from 'react'
import skl from "./Skills.module.css"
import { SiJavascript } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { FaNpm } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { SiChakraui } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { Heading } from '@chakra-ui/react'
import { SiNextdotjs } from "react-icons/si";
import { SiRender } from "react-icons/si";


import vsc from "./imgs/vsc.png";
import vercel from "./imgs/vercel.png"
import git from "./imgs/git.png"
import { SiTypescript } from "react-icons/si"
import { AiFillCodeSandboxCircle } from 'react-icons/ai'
import replet from "./imgs/replet.png"
import cylic from "../Image/cyclic.png"
import render from "../Image/render.png"



const Skills = ({ skill }) => {

    const handleopen = (link) => {
        window.open(link, "_blank")
    }

    return (
        <>
            <div id="skills" ref={skill} className={skl.box}>
                <Heading as='h2' size='2xl' color={"white"} fontWeight={400}> Tech Stacks </Heading>
                <div className={skl.sklimg}>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://developer.mozilla.org/en-US/docs/Web/JavaScript")} >
                        <SiJavascript size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Javascript </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://developer.mozilla.org/en-US/docs/Web/HTML")} >

                        <SiHtml5 size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> HTML </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://developer.mozilla.org/en-US/docs/Web/CSS")} >
                        <SiCss3 size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> CSS 3 </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://react.dev/")}  >
                        <SiReact size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> React </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://nodejs.org/en")} >
                        <IoLogoNodejs size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Node js </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://www.mongodb.com/")} >
                        <SiMongodb size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Mongodb </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://expressjs.com/")} >
                        <SiExpress size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Express </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://redux.js.org/")} >
                        <SiRedux size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Redux </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://www.npmjs.com/")} >
                        <FaNpm size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Npm </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://nextjs.org/")} >
                        <SiNextdotjs size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Nextjs </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://chakra-ui.com/")} >
                        <SiChakraui size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Chakra-UI </p>
                    </div>
                    <div id={skl.box2} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://www.typescriptlang.org/")} >
                        <SiTypescript size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Typescript </p>
                    </div>
                </div>
            </div>
            <div className={skl.par2}>
                <Heading as='h2' size='2xl' color={"white"} fontWeight={400}> Tools Section </Heading>
                <div className={skl.sklimgcolor}>
                    <div id={skl.box5} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://github.com/")} >
                        <img src={git} alt="git-img" width="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Git </p>
                    </div>
                    <div id={skl.box5} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://vercel.com/")} >
                        <img src={vercel} alt="vercel-img" width="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Vercel </p>
                    </div>
                    <div id={skl.box5} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://code.visualstudio.com/")} >
                        <img src={vsc} alt="vscode-img" width="50px" className='skills-card-img' />
                        <p className="skills-card-name"> VS Code </p>
                    </div>
                    <div id={skl.box5} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://codesandbox.io/")} >
                        <AiFillCodeSandboxCircle size="50px" className='skills-card-img' />
                        <p className="skills-card-name" > CodeSandbox </p>
                    </div>
                    <div id={skl.box5} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://www.netlify.com/")} >
                        <SiNetlify size="50px" color='rgb(53,165,177)' className='skills-card-img' />
                        <p className="skills-card-name"> Netlify </p>
                    </div>
                    <div id={skl.box5} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://replit.com/")}  >
                        <img src={replet} alt="replet-img" width="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Replit </p>
                    </div>
                    <div id={skl.box5} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://github.com/")}  >
                        <BsGithub size="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Github </p>
                    </div>
                    <div id={skl.box5} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://www.cyclic.sh/")}  >
                        {/* <BsGithub size="50px" className='skills-card-img' />  */}
                        <img src={cylic} alt="cylic-img" width="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Cyclic </p>
                    </div>
                    <div id={skl.box5} data-aos="zoom-in" className="skills-card" onClick={() => handleopen("https://render.com/")}  >
                        <img src={render} alt="render-img" width="50px" className='skills-card-img' />
                        <p className="skills-card-name"> Render </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills



