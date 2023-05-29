import React, { useEffect, useRef, useState } from "react";
import style from "./Navbar.module.css";
import mylogo from "../../img/nav.png";
import res from "../Image/resumeme.pdf";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerOverlay,
    useDisclosure,
} from "@chakra-ui/react";

const Navbar = ({ home, about, skill, contact, project }) => {
    const [scroll, setScroll] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.pageYOffset);
        });
    }, []);

    const handleResume = () => {
        window.open(
            "https://drive.google.com/file/d/1QDtKhJGLNZtCdd9Ia-8mJ1tMNs5fm-hg/view?usp=sharing"
        );
    };

    return (
        <div
            className={style.nav}
            style={{
                backgroundColor: scroll > 90 ? "rgba(53, 53, 53, 0.619)" : "unset",
                boxShadow:
                    scroll > 90 ? "0px 1px 10px rgba(182, 116, 41, 0.829)" : "none",
            }}
        >
            <div className={style.box1}>
                <img src={mylogo} alt="myName-Img" />
            </div>
            <div className={style.topoption}>
                <div
                    onClick={() => home.current.scrollIntoView({ behavior: "smooth" })}
                >
                    Home
                </div>
                <div
                    onClick={() => about.current.scrollIntoView({ behavior: "smooth" })}
                >
                    About
                </div>
                <div
                    onClick={() => skill.current.scrollIntoView({ behavior: "smooth" })}
                >
                    Skill
                </div>
                <div
                    onClick={() => project.current.scrollIntoView({ behavior: "smooth" })}
                >
                    Project
                </div>
                <div
                    onClick={() => contact.current.scrollIntoView({ behavior: "smooth" })}
                >
                    Contact
                </div>
                <button className={style.btn} onClick={handleResume}>
                    <a href={res} download="Tushit_Saxena_Resume">
                        Resume
                    </a>
                </button>
            </div>
            <div className={style.side_bar}>
                <button
                    className={style.ham}
                    ref={btnRef}
                    colorScheme="teal"
                    onClick={onOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    size={"xs"}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent backgroundColor="rgb(101,84,70)">
                        <DrawerCloseButton />
                        <DrawerBody className={style.boxs}>
                            <button className={style.btton} onClick={() => home.current.scrollIntoView({ behavior: "smooth" })}>Home</button>
                            <button className={style.btton} onClick={() => about.current.scrollIntoView({ behavior: "smooth" })}>About</button>
                            <button className={style.btton} onClick={() => skill.current.scrollIntoView({ behavior: "smooth" })}>Skill</button>
                            <button className={style.btton} onClick={() => project.current.scrollIntoView({ behavior: "smooth" })}>Project</button>
                            <button className={style.btton} onClick={() => contact.current.scrollIntoView({ behavior: "smooth" })}>Contact</button>
                            <button className={style.btton} onClick={handleResume}>
                                <a href={res} download="Tushit_Saxena_Resume">
                                    Resume
                                </a>
                            </button>
                        </DrawerBody> 
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;
