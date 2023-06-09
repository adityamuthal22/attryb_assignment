import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Links = ["Courses", "Colledges", "Contact Us"];

const navLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}
    href={"/"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NavLink to="/">
                <Image
                  height={"60px"}
                  width={"120px"}
                  src={
                    "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/610adb168ac2134313a412c2_logo_7f96c1f9-f7ba-4f78-977e-d8005174a68c.png"
                  }
                />
              </NavLink>
            </Box>
          </HStack>

          <Flex alignItems={"center"} gap="10px">
            <Text fontWeight={"bold"}>
              <NavLink to="/">Home</NavLink>
            </Text>
            <Text fontWeight={"bold"}>
              <NavLink to="/dealarform">AddCarData</NavLink>
            </Text>

            <Button bg="#ced1e6" borderRadius={"20px"}>
              <NavLink to="/login">Login</NavLink>
            </Button>
            <Button
              bg="#217fc6"
              borderRadius={"20px"}
              _hover={{ bg: "#217fc6" }}
            >
              <NavLink to="/signup" bg="#217fc6" _hover={{ bg: "#217fc6" }}>
                Signup
              </NavLink>
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
