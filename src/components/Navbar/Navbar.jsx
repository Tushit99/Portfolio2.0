import React, { useEffect, useRef, useState } from 'react'
import style from "./Navbar.module.css"
import mylogo from "../../img/nav.png"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react';

const Navbar = () => {
    const [scroll, setScroll] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.pageYOffset);
        });
    }, []);

    return (
        <div className={style.nav}
            style={{
                backgroundColor: scroll > 90 ? "rgba(53, 53, 53, 0.619)" : "unset",
                boxShadow: scroll > 90 ? "0px 1px 10px rgba(182, 116, 41, 0.829)" : "none",
            }}
        >
            <div className={style.box1}>
                <img src={mylogo} alt="myName-Img" />
            </div>
            <div className={style.topoption}>
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
            <div className={style.side_bar}>
                <button className={style.ham} ref={btnRef} colorScheme='teal' onClick={onOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}  
                    size={"xs"}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent
                        backgroundColor="rgb(101,84,70)"  
                    >
                        <DrawerCloseButton />
                        <DrawerBody>
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
                            <button><a href="#">Resume</a></button>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    )
}

export default Navbar 
