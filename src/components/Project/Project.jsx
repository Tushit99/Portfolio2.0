import React from "react";
import pro from "./project.module.css";
import {
  Grid,
  Flex,
  Card,
  CardBody,
  Image,
  Heading,
  CardFooter,
  Button,
  Box,
  Stack,
  Badge,
} from "@chakra-ui/react";
import herolog from "../hiringHerosimg/helogo.png"
import jcrew from "../jcrewPictures/jcrew.png";
import hemain from "../hiringHerosimg/main.png"
import jc from "../jcrewPictures/jcrewhome.png";
import mainhero from "../hiringHerosimg/mid.png";

import herocart from "../hiringHerosimg/hecart.png";
import herofooter from "../hiringHerosimg/herofooter.png";
import herologin from "../hiringHerosimg/helogin.png";
import heroPay from "../hiringHerosimg/hepayment.png";

import jcrcart from "../jcrewPictures/cart.png";
import jchome from "../jcrewPictures/jcrewhome.png";
import jcmid from "../jcrewPictures/jchome.png";
import jcpayment from "../jcrewPictures/payment.png";
import jcsort from "../jcrewPictures/sorting.png";
import Prodrawer from "../ProjectDrawer.jsx/Prodrawer";
import Blog from "../Readbox/Blog";

import reladmin from "../relience/relAdmin.png";
import relCart from "../relience/relCart.png";
import relfooter from "../relience/relfooter.png";
import relHome from "../relience/relHome.png";
import relProduct from "../relience/relProduct.png";
import relLogo from "../relience/relLogo.png";



import ffhome from "../fashon/home.png"
import ffproduct from "../fashon/product.png"
import fflogin from "../fashon/login.png"
import ffsignup from "../fashon/sign.png"
import ffcart from "../fashon/cart.png"
import ffooter from "../fashon/footer.png"
import fflogo from "../fashon/logo.png"



const D1 = [
  {
    id: 1,
    image: relHome,
    title: "reliance",
    description:
      "Reliance Digital is used for buying the electrical products, Home Appliances & other kind of products. Digital Express Digital Stores are bigger in size than the other format Digital Xpress Mini Stores.",
    logo: relLogo,
    github: "https://github.com/imukeshkaushal/relianceDigital_clone",
    tec: ["HTML", "CSS", "Javascript", "Chakra", "HTML"],
    netlify: "https://reliance-digital-beryl.vercel.app/",
    fullImg: [
      { im: relHome, name: "Home" },
      { im: relfooter, name: "Footer" },
      { im: reladmin, name: "Admin" },
      { im: relCart, name: "Cart" },
      { im: relProduct, name: "Product" },
    ],
  },
  {
    id: 2,
    image: jc,
    title: "J.Crew",
    logo: jcrew,
    description:
      "The company offers an assortment of women's, men's, and children's apparel and accessories, including swimwear, outerwear, loungewear, bags, sweaters, denim, dresses, suiting, jewelry, and shoes. ",
    tec: ["React", "CSS", "Javascript", "HTML"],
    github: "https://github.com/Tushit99/versed-silver-14",
    netlify: "https://versed-silver-14.netlify.app/",
    fullImg: [
      { im: jchome, name: "Home" },
      { im: jcmid, name: "advertisement" },
      { im: jcsort, name: "Sort" },
      { im: jcrcart, name: "Cart" },
      { im: jcpayment, name: "Payment" },
    ],
  },
  {
    id: 3,
    image: hemain,
    title: "Fiverr",
    description:
      "Fiverr is a global online marketplace for freelance services. Fiverr's platform connects freelancers to people or businesses looking to hire. The unique term for a service offered by a seller on Fiverr is called a 'Gig. ",
    logo: herolog,
    github: "https://github.com/Tushit99/tedious-advertisement-2369",
    tec: ["HTML", "CSS", "Javascript", "Bootstrap", "JSON"],
    netlify: "https://curious-travesseiro-aa7d46.netlify.app/",
    fullImg: [
      { im: mainhero, name: "Home" },
      { im: herologin, name: "Logo" },
      { im: herofooter, name: "Footer" },
      { im: herocart, name: "Cart" },
      { im: heroPay, name: "Payment" },
    ],
  },
  {
    id: 4,
    image: ffhome,
    title: "Fashion Frenzy",
    logo: fflogo,
    description:
      "Anthropologie is a unique, full-lifestyle shopping destination, with a mostly exclusive assortment of clothing, shoes, accessories, beauty, furniture, home décor, garden, bridal, and more.",
    tec: ["React", "CSS", "nodeJs", "MongoDB", "express"],
    github: "https://github.com/suhail3535/alive-run-138",
    netlify: "https://frontend-suhail3535.vercel.app/",
    fullImg: [
      { im: ffhome, name: "Home" },
      { im: ffproduct, name: "Product" },
      { im: fflogin, name: "Login" },
      { im: ffsignup, name: "SiginUp" },
      { im: ffcart, name: "Cart" },
      { im: ffooter, name: "Footer" }, 
    ],
  },
];

const Project = ({ project }) => {

  const handlegitlink = (url) => {
    window.open(url, "_blank");
  };

  const handlevercelLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div ref={project} className={pro.box} >
      <Heading as="h2" size="2xl" color={"white"} fontWeight={400}>
        Projects
      </Heading>
      <Grid
        id="projects"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        padding="20px 30px"
      >
        {D1.map((e) => (
          <div
            key={e.id}
            className="project-card"
          >
            <Card
              color="white"
              boxShadow="md"
              variant="solid"
              w={{ base: "100%", md: "90%" }}
              m="20px auto"
              textAlign="center"
              backgroundColor="unset"
              border={"2px"}
              borderColor={"rgba(9, 39, 63, 0.603)"}
              className={pro.probox}
            >
              <img
                src={e.logo}
                alt="imgLink" 
                className={pro.imghover} 
                style={{ margin: "4px auto", height: "64px" }}
              />
              <h6 className="project-title"> {e.title} </h6>
              <Box padding="10px 20px" textAlign="left" >
                <Blog text={e.description} />
              </Box>
              <Flex
                alignItems="center"
                gap="10px"
                wrap="wrap"
                textAlign="left"
                width="90%"
                margin="auto"
              >
                <Heading className="project-tech-stack" as="h4" size="sm" color="white" fontWeight={500}>
                  TecStack:
                </Heading>
                {e.tec.map((x, i) => (
                  <Stack direction='row' margin="0" key={i}>
                    <Badge colorScheme='purple' np>
                      {x}
                    </Badge>
                  </Stack>
                ))}
              </Flex>
              <CardBody>
                <Image src={e.image} className={pro.showimg} alt="imgLink" borderRadius="lg" />
              </CardBody>

              <CardFooter  >
                <Flex align="center" justifyContent="space-evenly" w="100%" margin="auto" gap="4px">
                  <Prodrawer title={e.title} fullImg={e.fullImg} />
                  <Button
                    variant="outline"
                    colorScheme="blue"
                    className="project-github-link"
                    margin="0"
                    fontSize={{ base: "md", md: "lg" }}
                    padding={{ base: "10px", md: "14px" }}
                    onClick={() => {
                      handlegitlink(e.github);
                    }}
                  >
                    Github
                  </Button>
                  <Button
                    colorScheme="blue"
                    variant="outline"
                    margin="0"
                    className="project-deployed-link"
                    fontSize={{ base: "md", lg: "lg" }}
                    padding={{ base: "10px", md: "14px" }}
                    onClick={() => {
                      handlevercelLink(e.netlify);
                    }}
                  >
                    Link
                  </Button>
                </Flex>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Project;
