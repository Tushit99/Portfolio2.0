import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const Prodrawer = ({ fullImg, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div>
      <Button
        variant="outline"
        colorScheme="orange"
        _hover={{ backgroundColor: "rgb(243, 224, 191)" }}
        onClick={onOpen}
        w={"100%"}
      >
        View
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundSize="100% 100%" backgroundImage="url('https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5')" color="white" >
          <DrawerCloseButton />
          <DrawerHeader size="md" > {title} Project Webpage </DrawerHeader>

          <DrawerBody
            w="90%"
            padding="20px"
            display="grid"
            margin="auto"
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={3}
          >
            {fullImg.map((z) => (
              <Box
                backgroundColor="rgba(209, 174, 81, 0.511)"
                borderWidth="2px"
                borderColor="rgb(255, 187, 0)"
                borderRadius="lg"
                padding="20px"
              >
                <Image src={z.im} alt="img" />
                <Heading as="h2" size="xl" textAlign="center">
                  {z.name}
                </Heading>
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Prodrawer;
