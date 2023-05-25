import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import dra from "./drawer.module.css";


const Hamb = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className={dra.main}>
      <Button ref={btnRef} colorScolorScheme='blue' variant='outline' _hover={{ backgroundColor: "blue.200" }} onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="white" color="black" width="100%" >
          <DrawerCloseButton />
          <DrawerBody width="100%" mt="40px">
            <Grid templateColumns='repeat(1, 1fr)' gap={4} textAlign="center"> 
              <GridItem _hover={{ backgroundColor: "blue.200" }} padding="2px 10px" borderRadius="10px" width="100%" > Home </GridItem>
              <GridItem _hover={{ backgroundColor: "blue.200" }} padding="2px 10px" borderRadius="10px" width="100%" > About </GridItem>
              <GridItem _hover={{ backgroundColor: "blue.200" }} padding="2px 10px" borderRadius="10px" width="100%" > Skill </GridItem>
              <GridItem _hover={{ backgroundColor: "blue.200" }} padding="2px 10px" borderRadius="10px" width="100%" > Contact </GridItem>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Hamb;
