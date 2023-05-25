import React, { useContext, useEffect, useState } from 'react'
import style from "./Navbar.module.css"
import mylogo from "../../img/nav.png"
// import { color } from 'framer-motion'
import { ThemeContext } from '../../context/Contextprovider'

const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.pageYOffset);
        });
    }, []);

    return (
        <div className={style.nav} 
        style={{
            backgroundColor: scroll > 50 ? "#1e1d1d85" : "unset",
            borderRadius: scroll > 50 ? "2px" : "0px",
            boxShadow: scroll > 50 ? "0px 1px 10px #095dbc" : "0 0 0 red",
        }}
        >
            <div className={style.box1}>
                <img src={mylogo} alt="myName-Img" />
            </div>
            <div className={style.topoption} style={{ color: theme ? "black" : "rgb(101,84,70)" }}>
                <div>
                    Home
                </div>
                <div>
                    About
                </div>
                <div>
                    Skill
                </div>
                <div>
                    Project
                </div>
                <div>
                    Contact
                </div>
                <button className={style.btn}><a href="#">Resume</a></button>
            </div> 
        </div>
    )
}

export default Navbar 
