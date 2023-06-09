import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "Name") {
      setName(value);
    } else if (name === "role") {
      setRole(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, Name);
    const payload = {
      username: email,
      password: password,
      name: Name,
      role: role,
    };

    axios
      .post(`https://attryb-assignment-nu.vercel.app/auth/register`, payload)
      .then((response) => {
        toast({
          title: "Register Successfully.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      })
      .catch((err) => {
        toast({
          title: "Register UnSuccessful.",
          position: "top-up",
          status: "error",
          duration: 9000,
          isClosable: true,
        });

        console.log(err);
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="Name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                required
                placeholder="name"
                type="text"
                name="Name"
                value={Name}
                onChange={handleInputChange}
                width="100%"
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                required
                placeholder="email"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl mt="20px" isRequired color="black">
              <FormLabel fontSize="12px">Register as</FormLabel>
              <RadioGroup
                name="role"
                fontWeight="bold"
                bg="teal.500"
                p="10px"
                m="auto"
                onChange={(value) =>
                  handleInputChange({ target: { name: "role", value } })
                }
                value={role}
              >
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="yellow" value="dealer">
                    Dealer
                  </Radio>
                  <Radio colorScheme="green" value="user">
                    User
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"#217fc6"}
                color={"white"}
                _hover={{
                  bg: "#217fc6",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"}>
                  <NavLink to="/login">Login</NavLink>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
