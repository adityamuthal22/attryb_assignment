import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { carADDAPI } from "../redux/action/car.action";
import { PostAPICALL } from "../Config/Functions/getFun";

export default function DealarFormPage() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [add, setAdd] = useState({
    title: "",
    description: "",
    image: "",
    model: "",
    year: "",
    price: "",
    color: "",
    engine: "",
    maxSpeed: "",
    mileage: "",
    user: "",
  });
  console.log(add)


  const handleAdd = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    if (name === 'year' || name === 'price' || name === 'maxSpeed' || name === 'mileage') {
      value = parseInt(value); // Use parseInt for integers or parseFloat for floating-point numbers
    }
    setAdd({ ...add, [name]: value });
  };

  const handleAddPackage = async () => {
    if (
      add.title !== "" &&
      add.description !== "" &&
      add.image !== "" &&
      add.model !== "" &&
      add.year !== "" &&
      add.price !== "" &&
      add.color !== "" &&
      add.engine !== "" &&
      add.maxSpeed !== "" &&
      add.mileage !== "" &&
      add.user !== ""
    ) {
      dispatch(carADDAPI(add));
      // PostAPICALL("cardetails",add)   
      toast({
        title: 'Car Details Added Successfully.',
        position:"top",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      // setAdd({});
    } else {
      toast({
        title: 'Car Details Not Added ',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={2}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Car Details Update Form
        </Heading>
        <HStack>
          <FormControl isRequired>
            <FormLabel>Image URL</FormLabel>
            <Input
              placeholder="Enter Image URL"
              _placeholder={{ color: "gray.500" }}
              required
              type="text"
              onChange={handleAdd}
              name="image"
              value={add.image}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
              _placeholder={{ color: "gray.500" }}
              required
              type="text"
              onChange={handleAdd}
              name="title"
              value={add.title}
            />
          </FormControl>
        </HStack>
        <FormControl isRequired>
          <FormLabel>Car Description</FormLabel>
          <Input
            placeholder="Car Description"
            _placeholder={{ color: "gray.500" }}
            required
            type="text"
            onChange={handleAdd}
            name="description"
            value={add.description}
          />
        </FormControl>
        <HStack>
          <FormControl isRequired>
            <FormLabel>Car model</FormLabel>
            <Input
              placeholder="Car model"
              _placeholder={{ color: "gray.500" }}
              required
              type="text"
              onChange={handleAdd}
              name="model"
              value={add.model}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Year</FormLabel>
            <Input
              placeholder="Year"
              _placeholder={{ color: "gray.500" }}
              required
              type="number"
              onChange={handleAdd}
              name="year"
              value={add.year}
            />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl isRequired>
            <FormLabel>Car Price</FormLabel>
            <Input
              placeholder="Car Price"
              _placeholder={{ color: "gray.500" }}
              required
              type="number"
              onChange={handleAdd}
              name="price"
              value={add.price}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>color</FormLabel>
            <Input
              placeholder="color"
              _placeholder={{ color: "gray.500" }}
              required
              type="text"
              onChange={handleAdd}
              name="color"
              value={add.color}
            />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl isRequired>
            <FormLabel>engine</FormLabel>
            <Input
              placeholder="engine"
              _placeholder={{ color: "gray.500" }}
              required
              type="text"
              onChange={handleAdd}
              name="engine"
              value={add.engine}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>MaxSpeed</FormLabel>
            <Input
              placeholder="MaxSpeed"
              _placeholder={{ color: "gray.500" }}
              required
              type="number"
              onChange={handleAdd}
              name="maxSpeed"
              value={add.maxSpeed}
            />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl isRequired>
            <FormLabel>Mileage</FormLabel>
            <Input
              placeholder="Mileage"
              _placeholder={{ color: "gray.500" }}
              required
              type="number"
              onChange={handleAdd}
              name="mileage"
              value={add.mileage}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>dealer</FormLabel>
            <Input
              placeholder="dealer"
              _placeholder={{ color: "gray.500" }}
              required
              type="text"
              onChange={handleAdd}
              name="user"
              value={add.user}
            />
          </FormControl>
        </HStack>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => {
              handleAddPackage();
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
