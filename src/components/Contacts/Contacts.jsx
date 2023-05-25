import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    Wrap,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useToast
} from "@chakra-ui/react";

import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from "react-icons/md";
import emailjs from "@emailjs/browser";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useRef, useState } from "react";
import swal from "sweetalert";
import cot from "./contacts.module.css";
import { EmailIcon } from "@chakra-ui/icons";
import copy from "copy-to-clipboard";

export const Contact = ({ contact }) => {
    const [emailsending, emailLoading] = useState(false);
    const toast = useToast();
    const form = useRef();

    const handleGit = () => {
        window.open("https://github.com/Tushit99", "_blank");
    };
    const handlefacebook = () => {
        window.open("https://www.facebook.com/tushit.saxena", "_blank");
    };
    const handlelinked = () => {
        window.open("https://www.linkedin.com/in/tushit-saxena", "_blank");
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailLoading(true);
        setTimeout(() => {
            emailLoading(false);
        }, 2000);

        emailjs.sendForm('service_gh309g9', 'template_0hob5st', form.current, 'C_zzCKTMDoBITRzMC')
            .then((result) => {
                swal({
                    title: "Sent",
                    text: "You message hase been sent",
                    icon: "success",
                    button: "OK",
                });
            }, (error) => {
                swal({
                    title: "Some thing went wrong!",
                    text: "Try again later",
                    icon: "error",
                    button: "OK",
                });
            });


        // emailjs.sendForm('service_x8ah85s', 'template_0hob5st', form.current, 'C_zzCKTMDoBITRzMC').then((result) => {
        //         console.log(result.text);
        //         swal({
        //             title: "Sent",
        //             text: "You message hase been sent",
        //             icon: "success",
        //             button: "OK",
        //         });
        //     },
        //     (error) => {
        //         console.log(error.text);
        //         swal({
        //             title: "Some thing went wrong!",
        //             text: "Try again later",
        //             icon: "error",
        //             button: "OK",
        //         });
        //     }
        // );
        e.target.reset();
    };

    const copyToClipboard = () => {
        copy("tushitsaxena4@gmail.com");
        toast({
            title: 'Email copyed',
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    return (
        <Container
            id="contact"
            ref={contact}
            maxW="100%"
            centerContent
            overflow="hidden"
        >
            <Flex w="90%" margin="auto">
                <Box
                    backgroundImage={{
                        base: "url('https://images.pexels.com/photos/15019156/pexels-photo-15019156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                        md: "url('https://img.freepik.com/premium-photo/modern-dark-leather-desk-with-mockup-place-keyboard-black-background-top-view_67155-16371.jpg')",
                    }}
                    color="white"
                    backgroundSize="100% 100%"
                    borderRadius="lg"
                    margin="auto"
                    width="95%"
                    m={{ sm: 4, md: 5, lg: 6 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <Box p={4} margin="auto">
                        <Wrap margin="auto" spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <div className={cot.main}>
                                <div className={cot.one}>
                                    <Heading>Contact</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                        Get in touch with me on
                                    </Text>
                                    <div className={cot.inform}>
                                        {/* <VStack pl={0} spacing={3} alignItems="flex-start"> */}
                                        <Button
                                            size="md"
                                            height="40px"
                                            cursor="auto"
                                            width="240px"
                                            variant="ghost"
                                            id="contact-email"
                                            color="#3154ff"
                                            onClick={copyToClipboard}
                                            _hover={{
                                                border: "1px solid #1C6FEB",
                                                backgroundColor: "#ffffffb4",
                                                color: "blue",
                                            }}
                                            leftIcon={<MdEmail color="#1970F1" size="20px" />}
                                        >
                                            tushitsaxena4@gmail.com
                                        </Button>
                                        <Button
                                            size="md"
                                            height="40px"
                                            cursor="auto"
                                            width="220px"
                                            variant="ghost"
                                            color="#3154ff"
                                            _hover={{
                                                border: "1px solid #1C6FEB",
                                                backgroundColor: "#ffffffb4",
                                                color: "blue",
                                            }}
                                            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                                        >
                                            Jamshedpur, Jharkhand
                                        </Button>
                                        <Button
                                            size="md"
                                            height="40px"
                                            width="180px"
                                            cursor="auto"
                                            id="contact-phone"
                                            variant="ghost"
                                            color="#3154ff"
                                            _hover={{
                                                border: "1px solid #1C6FEB",
                                                backgroundColor: "#ffffffb4",
                                                color: "blue",
                                            }}
                                            leftIcon={<MdPhone color="#1970F1" size="20px" />}
                                        >
                                            +91-6397310463
                                        </Button>
                                        {/* </VStack> */}
                                    </div>
                                    <div className={cot.linksto}>
                                        <IconButton
                                            aria-label="facebook"
                                            variant="ghost"
                                            onClick={handlefacebook}
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: "#004fb7" }}
                                            icon={<MdFacebook size="36px" />}
                                        />
                                        <IconButton
                                            aria-label="github"
                                            variant="ghost"
                                            id="contact-github"
                                            color="white"
                                            size="lg"
                                            onClick={handleGit}
                                            isRound={true}
                                            _hover={{ bg: "#004fb7" }}
                                            icon={<BsGithub size="30px" />}
                                        />
                                        <IconButton
                                            aria-label="discord"
                                            variant="ghost"
                                            id="contact-linkedin"
                                            color="white"
                                            size="lg"
                                            onClick={handlelinked}
                                            isRound={true}
                                            _hover={{ bg: "#004fb7" }}
                                            icon={<FaLinkedinIn size="28px" />}
                                        />
                                    </div>
                                </div>
                                <div className={cot.two}>
                                    <Box m={8}>
                                        <form id="name" ref={form} onSubmit={sendEmail}>
                                            <VStack spacing={5}>
                                                <FormControl>
                                                    <FormLabel>Your Name</FormLabel>
                                                    <InputGroup borderColor="#a3b0ff">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<BsPerson color="gray.800" />}
                                                        />
                                                        <Input
                                                            type="text"
                                                            placeholder="Enter name"
                                                            name="from_name"
                                                            required
                                                            size="md"
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Mail</FormLabel>
                                                    <InputGroup borderColor="#a3b0ff">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<MdOutlineEmail color="gray.800" />}
                                                        />
                                                        <Input
                                                            type="email"
                                                            placeholder="Enter email"
                                                            name="user_email"
                                                            required
                                                            size="md"
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Message</FormLabel>
                                                    <Textarea
                                                        borderColor="#a3b0ff"
                                                        name="message"
                                                        placeholder="Enter message"
                                                        required
                                                        _hover={{
                                                            borderRadius: "gray.300",
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormControl id="name" float="right">
                                                    <Button
                                                        isLoading={emailsending}
                                                        loadingText="Sending..."
                                                        variant="solid"
                                                        bg="#0D74FF"
                                                        type="submit"
                                                        className={cot.submitbt}
                                                        value="Send"
                                                        leftIcon={<EmailIcon />}
                                                        color="white"
                                                    >
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </form>
                                    </Box>
                                </div>
                            </div>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
            <div>
                <ul class="wrapper">
                    <li class="icon facebook">
                        <span class="tooltip">Facebook</span>
                        <span><i class="fab fa-facebook-f"></i></span>
                    </li>
                    <li class="icon twitter">
                        <span class="tooltip">Twitter</span>
                        <span><i class="fab fa-twitter"></i></span>
                    </li>
                    <li class="icon instagram">
                        <span class="tooltip">Instagram</span>
                        <span><i class="fab fa-instagram"></i></span>
                    </li>
                    <li class="icon github">
                        <span class="tooltip">Github</span>
                        <span><i class="fab fa-github"></i></span>
                    </li>
                    <li class="icon linkedin">
                        <span class="tooltip">Linkedin</span>
                        <span><i class="fab fa-linkedin-in"></i></span>
                    </li>
                </ul>
            </div>
        </Container>
    );
};

// import React, { useRef, useState } from "react";
// import { RiMessengerLine } from "react-icons/ri";
// import { BsWhatsapp } from "react-icons/bs";
// import cont from "./contacts.module.css";
// import { Button, Heading } from "@chakra-ui/react";
// import emailjs from "@emailjs/browser";
// import swal from 'sweetalert';

// export const Contact = ({contact}) => {
//     const [load2, set2Loading] = useState(false);
//     const [load3, set3Loading] = useState(false);
//     const [emailsending, emailLoading] = useState(false);
//     const form = useRef();

//     const handleLoad2 = () => {
//         set2Loading(true);
//         setTimeout(() => {
//             set2Loading(false);
//         }, 1000);
//     };
//     const handleLoad3 = () => {
//         set3Loading(true);
//         setTimeout(() => {
//             set3Loading(false);
//         }, 1000);
//     };
//     const sendEmail = (e) => {
//         e.preventDefault();
//         emailLoading(true);
//         setTimeout(() => {
//             emailLoading(false);
//         }, 2000);

//         emailjs.sendForm(
//             "service_x8ah85s",
//             "template_0hob5st",
//             form.current,
//             "C_zzCKTMDoBITRzMC"
//         )
//             .then(
//                 (result) => {
//                     console.log(result.text);
//                     swal({
//                         title: "Sent",
//                         text: "You message hase been sent",
//                         icon: "success",
//                         button: "OK",
//                     });
//                 },
//                 (error) => {
//                     console.log(error.text);
//                     swal({
//                         title: "Some thing went wrong!",
//                         text: "Try again later",
//                         icon: "error",
//                         button: "OK",
//                     });
//                 }
//             );
//         e.target.reset();
//     };

//     return (
//         <div ref={contact} className={cont.box}>
//             <h5> Get In Touch </h5>
//             <Heading as='h2' size='2xl' color={"white"} fontWeight={400} > Contact Me </Heading>
//             <div className={cont.linkon}>
//                 <div>
//                     <div className={cont.icon2}>
//                         <div style={{ width: "60px", margin: "10px auto" }}>
//                             <RiMessengerLine size="60px" color="blue" />
//                         </div>
//                         <h4> Facebook </h4>
//                         <Button
//                             isLoading={load2}
//                             loadingText="Facebook"
//                             colorScheme="blue"
//                             variant="solid"
//                             m="10px"
//                             size={{ base: "sm", xl: "lg" }}
//                             w={{ base: "90%", xl: "80%" }}
//                             onClick={handleLoad2}
//                         >
//                             <a href="https://m.me/tushit.saxena"> Send a message </a>
//                         </Button>
//                     </div>
//                     <div className={cont.icon2}>
//                         <div style={{ width: "60px", margin: "14px auto" }}>
//                             <BsWhatsapp size="60px" color="green" />
//                         </div>
//                         <h4> WhatsApp </h4>
//                         <Button
//                             isLoading={load3}
//                             loadingText="Whatsapp"
//                             colorScheme="teal"
//                             m="10px"
//                             size={{ base: "sm", xl: "lg" }}
//                             w={{ base: "90%", xl: "80%" }}
//                             variant="solid"
//                             onClick={handleLoad3}
//                         >
//                             <a href="https://api.whatsapp.com/send?phone=+916397310463">
//                                 {" "}
//                                 Send a message{" "}
//                             </a>
//                         </Button>
//                     </div>
//                 </div>
//                 <div className={cont.form}>
//                     <form ref={form} onSubmit={sendEmail} className={cont.infomation}>
//                         <label>Name</label>
//                         <input type="text" placeholder="Enter name" name="from_name" required />
//                         <label>Email</label>
//                         <input type="email" placeholder="Enter email" name="user_email" required />
//                         <label>Message</label>
//                         <textarea name="message" placeholder="Enter message" required />
//                         <Button
//                             isLoading={emailsending}
//                             bg="rgb(49,130,206)"
//                             color="white"
//                             boxShadow='md'
//                             variant="solid"
//                             w="80%"
//                             m="20px auto"
//                             textAlign="center"
//                             loadingText="Sending message"
//                             _hover={{
//                                 boxShadow: 'outline',
//                             }}
//                         type="submit"
//                             value="Send">
//                             Send email
//                         </Button>
//                         {/* ==> npm install emailjs-com --save */}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };
