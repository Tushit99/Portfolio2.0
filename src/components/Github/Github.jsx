import { Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import git from "./github.module.css";

const Github = () => {
    return (
        <div className={git.box}>
            <Heading
                as="h2"
                color={"white"}
                size="2xl"
                margin="0 auto 50px auto"
                fontWeight={400}
            >
                Github
            </Heading>
            <div className={git.grid}>
                <img
                    id="github-stats-card"
                    width={"100%"}
                    src="https://github-readme-stats.vercel.app/api?username=Tushit99&show_icons=true&theme=highcontrast&hide_border=true"
                    alt="git2"
                />
                {/* <img
                    id="github-streak-stats"
                    width={"100%"}
                    src="https://github-readme-streak-stats.herokuapp.com?user=Tushit99&theme=highcontrast&border_radius=5&hide_border=true"
                    alt="git3"
                /> */}
                <img
                    id="github-top-langs"
                    width={"100%"}
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tushit99&exclude_repo=github-readme-stats&layout=compact&theme=highcontrast&hide=shell&hide_border=true"
                    alt="git1"
                />
                {/* <img 
                    width={"100%"} 
                    style={{border:"2px solid rgb(0, 0, 159)",height:"100%", borderRadius:"20px"}}
                    src="https://github-readme-activity-graph.cyclic.app/graph?username=Tushit99&theme=react-dark&hide_border=true"
                    alt="Tushit Activity Graph" 
                /> */}
            </div>
            <div className={git.calandar}>
                <GitHubCalendar username="Tushit99" />
            </div>
            {/* <img src="https://github-profile-trophy.vercel.app/?username=tushit99&theme=github-dark" className={git.trophy} alt="tushit99" /> */}
        </div>
    );
};

export default Github;
