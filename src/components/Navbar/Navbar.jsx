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
            backgroundColor: scroll > 90 ? "rgba(25, 33, 46, 0.849)" : "unset", 
            boxShadow: scroll > 90 ? "0px 1px 10px rgba(182, 116, 41, 0.829)" : "none",
        }}
        >
            <div className={style.box1}>
                <img src={mylogo} alt="myName-Img" />
            </div>
            <div className={style.topoption} style={{ color: theme ? "black" : "rgb(99, 78, 59)" }}>
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
