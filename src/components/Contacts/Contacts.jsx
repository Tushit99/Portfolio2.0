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
        <div>
            <Heading as="h2" size="2xl" fontWeight={400}>
                Contact
            </Heading>
            <Container
                className={cot.headtop}
                ref={contact}
                maxW="100%"
                centerContent
                overflow="hidden"
            >
                <Flex w="90%" margin="auto">
                    <Box
                        color="white"
                        backgroundSize="100% 100%"
                        borderRadius="lg"
                        margin="auto"
                        width="95%"
                        className={cot.backbox}
                        m={{ sm: 4, md: 5, lg: 6 }}
                        p={{ sm: 5, md: 5, lg: 16 }}
                    >
                        <Box p={4} margin="auto">
                            <Wrap margin="auto" spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                <div className={cot.main}>
                                    <div className={cot.one}>
                                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
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
                                                display="flex" 
                                                alignItems="center" 
                                                gap="6px"
                                                color="rgb(255, 255, 255)"
                                                onClick={copyToClipboard}
                                                _hover={{
                                                    border: "1px solid #1C6FEB",
                                                    backgroundColor: "#ffffffb4",
                                                    color: "blue",
                                                }}
                                                leftIcon={<MdEmail color="rgb(255, 255, 255)" size="20px" />}
                                            >
                                                tushitsaxena4@gmail.com
                                            </Button>
                                            <Button
                                                size="md"
                                                height="40px"
                                                cursor="auto"
                                                width="220px"
                                                display="flex" 
                                                alignItems="center" 
                                                gap="6px"
                                                variant="ghost" 
                                                color="rgb(255, 255, 255)"
                                                _hover={{
                                                    border: "1px solid #1C6FEB",
                                                    backgroundColor: "#ffffffb4",
                                                    color: "blue",
                                                }}
                                                leftIcon={<MdLocationOn color="rgb(255, 255, 255)" size="20px"  />}
                                            >
                                                Jamshedpur, Jharkhand
                                            </Button>
                                            <Button
                                                size="md"
                                                height="40px"
                                                width="180px"
                                                cursor="auto"
                                                id="contact-phone"
                                                display="flex" 
                                                alignItems="center" 
                                                gap="4px" 
                                                variant="ghost"
                                                color="rgb(255, 255, 255)"
                                                _hover={{
                                                    border: "1px solid #1C6FEB",
                                                    backgroundColor: "#ffffffb4",
                                                    color: "blue",
                                                }}
                                                leftIcon={<MdPhone color="rgb(255, 255, 255)" size="20px" />}
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
                                                // transition="scale"
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
                                                        <InputGroup borderColor="rgb(182,116,41)">
                                                            <InputLeftElement
                                                                pointerEvents="none"
                                                                children={<BsPerson color="rgb(182,116,41)" />}
                                                            />
                                                            <Input
                                                                type="text"
                                                                focusBorderColor='rgb(101,84,70)'
                                                                placeholder="Enter name"
                                                                name="from_name"
                                                                required
                                                                size="md"
                                                            />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl id="name">
                                                        <FormLabel>Mail</FormLabel>
                                                        <InputGroup borderColor="rgb(182,116,41)">
                                                            <InputLeftElement
                                                                pointerEvents="none"
                                                                children={<MdOutlineEmail color="rgb(182,116,41)" />}
                                                            />
                                                            <Input
                                                                type="email"
                                                                placeholder="Enter email"
                                                                name="user_email"
                                                                focusBorderColor='rgb(101,84,70)'
                                                                required
                                                                size="md"
                                                            />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl id="name">
                                                        <FormLabel>Message</FormLabel>
                                                        <Textarea
                                                            borderColor="rgb(182,116,41)"
                                                            name="message"
                                                            placeholder="Enter message"
                                                            focusBorderColor='rgb(101,84,70)'
                                                            required
                                                            _hover={{
                                                                border: "gray.300",
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormControl id="name" float="right">
                                                        <Button
                                                            isLoading={emailsending}
                                                            loadingText="Sending..."
                                                            variant="solid"
                                                            bg="rgb(182,116,41)"
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
            </Container>
        </div>
    );
};


