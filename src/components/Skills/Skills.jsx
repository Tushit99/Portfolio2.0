import React from 'react'
import skl from "./Skills.module.css"
import { SiCodesandbox, SiGit, SiJavascript, SiMaterialui, SiTailwindcss } from 'react-icons/si'
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
// import { SiRender } from "react-icons/si";  


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
        <div className={skl.skills}>
            <div ref={skill} >
                <Heading as='h2' size='2xl' color={"white"} fontWeight={400}> Tech Stacks </Heading>
                <div className={skl.sklimg}>
                    <div className={skl.showbox} onClick={() => handleopen("https://developer.mozilla.org/en-US/docs/Web/JavaScript")} >
                        <SiJavascript size="50px" color='rgb(239,216,29)' />
                        <p> Javascript </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://developer.mozilla.org/en-US/docs/Web/HTML")} >

                        <SiHtml5 size="50px" color='rgb(221,75,37)' />
                        <p> HTML </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://developer.mozilla.org/en-US/docs/Web/CSS")} >
                        <SiCss3 size="50px" color='rgb(37,75,221)' />
                        <p> CSS 3 </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://react.dev/")}  >
                        <SiReact size="50px" color='rgb(66,153,225)' />
                        <p> React </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://nodejs.org/en")} >
                        <IoLogoNodejs size="50px" color='rgb(112,168,97)' />
                        <p> Node js </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://www.mongodb.com/")} >
                        <SiMongodb size="50px" color='rgb(0,238,101)' />
                        <p> Mongodb </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://expressjs.com/")} >
                        <SiExpress size="50px" color='black'  />
                        <p> Express </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://redux.js.org/")} >
                        <SiRedux size="50px" color='rgb(118,74,188)' />
                        <p> Redux </p>
                    </div> 
                    <div className={skl.showbox} onClick={() => handleopen("https://nextjs.org/")} >
                        <SiNextdotjs size="50px" color='black' />
                        <p> Nextjs </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://chakra-ui.com/")} >
                        <SiChakraui size="50px" color='rgb(70,200,193)' />
                        <p> Chakra-UI </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://www.typescriptlang.org/")} >
                        <SiTypescript size="50px" color='rgb(49,120,198)' />
                        <p> Typescript </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://www.typescriptlang.org/")} >
                        <SiMaterialui size="50px" color='rgb(49,120,198)' />
                        <p> Materialui </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://www.typescriptlang.org/")} >
                        <SiTailwindcss size="50px" color='rgb(49,120,198)' />
                        <p> Tailwind CSS </p>
                    </div>
                </div>
            </div>
            <div className={skl.par2}>
                <Heading as='h2' size='2xl' color={"white"} fontWeight={400}> Tools Section </Heading>
                <div className={skl.sklimg}>
                    <div className={skl.showbox} onClick={() => handleopen("https://github.com/")} >
                        <img src={git} alt="git-img" width="50px" />
                        <p> Git </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://vercel.com/")} >
                        <img src={vercel} alt="vercel-img" width="50px" />
                        <p> Vercel </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://code.visualstudio.com/")} >
                        <img src={vsc} alt="vscode-img" width="50px" />
                        <p> VS Code </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://codesandbox.io/")} >
                        <AiFillCodeSandboxCircle size="50px" color='black' />
                        <p > CodeSandbox </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://www.netlify.com/")} >
                        <SiNetlify size="50px" color='rgb(53,165,177)' />
                        <p> Netlify </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://replit.com/")}  >
                        <img src={replet} alt="replet-img" width="50px" />
                        <p> Replit </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://www.npmjs.com/")} >
                        <FaNpm size="50px" color='rgb(203,56,55)' />
                        <p> Npm </p>
                    </div> 
                    <div className={skl.showbox} onClick={() => handleopen("https://github.com/")}  >
                        <BsGithub size="50px" color='black' />
                        <p> Github </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://www.cyclic.sh/")}  >  
                        <img src={cylic} alt="cylic-img" width="50px" />
                        <p> Cyclic </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://render.com/")}  >
                        <img src={render} alt="render-img" width="50px" />
                        <p> Render </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://github.com/")}  >
                        <SiGit size="50px" color='black' />
                        <p> Git </p>
                    </div>
                    <div className={skl.showbox} onClick={() => handleopen("https://github.com/")}  >
                        <SiCodesandbox size="50px" color='black' />
                        <p> Code Pen </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills



