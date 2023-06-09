import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { AiFillCar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { carDetailsAPI } from "../redux/action/car.action";

const Home = () => {
  const dispatch = useDispatch();
  const carData = useSelector((state) => state.cardetails.cardetails);
  const [filterOptions, setFilterOptions] = useState({
    sortBy: "", // "priceHighToLow" or "priceLowToHigh"
    filterColor: "", // color value to filter by
    filterMileage: "", // mileage value to filter by
  });

  const applyFilters = () => {
    let filteredData = [...carData];

    if (filterOptions.sortBy === "priceHighToLow") {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (filterOptions.sortBy === "priceLowToHigh") {
      filteredData.sort((a, b) => a.price - b.price);
    }

    if (filterOptions.filterColor !== "") {
      filteredData = filteredData.filter(
        (car) => car.color === filterOptions.filterColor
      );
    }

    if (filterOptions.filterMileage !== "") {
      const mileageRange = filterOptions.filterMileage.split("-");
      const minMileage = Number(mileageRange[0]);
      const maxMileage = Number(mileageRange[1]);
      filteredData = filteredData.filter(
        (car) => car.mileage >= minMileage && car.mileage <= maxMileage
      );
    }

    return filteredData;
  };

  const resetFilters = () => {
    setFilterOptions({
      filterColor: "",
      filterMileage: "",
    });
  };

  console.log(carData);
  useEffect(() => {
    dispatch(carDetailsAPI());
  }, []);

  return (
    <Box>
      <Box bg={"#edd9dc"} pb="20px">
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <HStack>
            <Button
              fontWeight={"bold"}
              bg={"white"}
              _hover={{ bg: "white" }}
              height={"50px"}
              marginTop={"20px"}
              marginLeft={"30px"}
              borderRadius={"30px"}
              fontSize={"22px"}
            >
              {<AiFillCar />}{" "}
              <span style={{ marginLeft: "10px" }}>Second-hand Car</span>
            </Button>
          </HStack>
          <HStack marginRight={"20px"}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input type="text" bg={"white"} borderRadius={"10px"} />
            </InputGroup>
          </HStack>
        </Flex>
        {/* <Flex justifyContent="flex-end" marginTop="10px" marginRight="30px">
          <Box>
            <Text as="label" marginRight="5px">
              Sort By:
            </Text>
            <select
              value={filterOptions.sortBy}
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  sortBy: e.target.value,
                })
              }
            >
              <option value="">None</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="priceLowToHigh">Price: Low to High</option>
            </select>
          </Box>

          <Box marginLeft="10px">
            <Text as="label" marginRight="5px">
              Filter Color:
            </Text>
            <Flex alignItems="center">
              <input
                type="checkbox"
                checked={filterOptions.filterColor === "Gray"}
                onChange={() =>
                  setFilterOptions({
                    ...filterOptions,
                    filterColor:
                      filterOptions.filterColor === "Gray" ? "" : "Gray",
                  })
                }
              />
              <Text marginLeft="3px">Gray</Text>
            </Flex>
            <Flex alignItems="center">
              <input
                type="checkbox"
                checked={filterOptions.filterColor === "blue"}
                onChange={() =>
                  setFilterOptions({
                    ...filterOptions,
                    filterColor:
                      filterOptions.filterColor === "blue" ? "" : "blue",
                  })
                }
              />
              <Text marginLeft="3px">Blue</Text>
            </Flex>
            <Flex alignItems="center">
              <input
                type="checkbox"
                checked={filterOptions.filterColor === "green"}
                onChange={() =>
                  setFilterOptions({
                    ...filterOptions,
                    filterColor:
                      filterOptions.filterColor === "green" ? "" : "green",
                  })
                }
              />
              <Text marginLeft="3px">Green</Text>
            </Flex>
          </Box>

          <Box marginLeft="10px">
            <Text as="label" marginRight="5px">
              Filter Mileage:
            </Text>
            <Flex alignItems="center">
              <input
                type="checkbox"
                checked={filterOptions.filterMileage === "10-20"}
                onChange={() =>
                  setFilterOptions({
                    ...filterOptions,
                    filterMileage:
                      filterOptions.filterMileage === "10-20" ? "" : "10-20",
                  })
                }
              />
              <Text marginLeft="3px">10 km/l - 20 km/l</Text>
            </Flex>
            <Flex alignItems="center">
              <input
                type="checkbox"
                checked={filterOptions.filterMileage === "20-60"}
                onChange={() =>
                  setFilterOptions({
                    ...filterOptions,
                    filterMileage:
                      filterOptions.filterMileage === "20-60" ? "" : "20-60",
                  })
                }
              />
              <Text marginLeft="3px">20 km/l - 60 km/l</Text>
            </Flex>
            <Flex alignItems="center">
              <input
                type="checkbox"
                checked={filterOptions.filterMileage === "60-100"}
                onChange={() =>
                  setFilterOptions({
                    ...filterOptions,
                    filterMileage:
                      filterOptions.filterMileage === "60-100" ? "" : "60-100",
                  })
                }
              />
              <Text marginLeft="3px">60 km/l - 100 km/l</Text>
            </Flex>
          </Box>
          <Button onClick={resetFilters} mt={4} ml={4}>
            Reset Filters
          </Button>
        </Flex> */}
        <Flex justifyContent="flex-end" marginTop="10px" marginRight="30px">
  <Box>
    <Text as="label" marginRight="5px">
      Sort By:
    </Text>
    <select
      value={filterOptions.sortBy}
      onChange={(e) =>
        setFilterOptions({
          ...filterOptions,
          sortBy: e.target.value,
        })
      }
    >
      <option value="">None</option>
      <option value="priceHighToLow">Price: High to Low</option>
      <option value="priceLowToHigh">Price: Low to High</option>
    </select>
  </Box>

  <Box marginLeft="10px">
    <Text as="label" marginRight="5px">
      Filter Color:
    </Text>
    <Flex alignItems="center">
      <input
        type="checkbox"
        checked={filterOptions.filterColor === "Gray"}
        onChange={() =>
          setFilterOptions({
            ...filterOptions,
            filterColor: filterOptions.filterColor === "Gray" ? "" : "Gray",
          })
        }
      />
      <Text marginLeft="3px">Gray</Text>
    </Flex>
    <Flex alignItems="center">
      <input
        type="checkbox"
        checked={filterOptions.filterColor === "blue"}
        onChange={() =>
          setFilterOptions({
            ...filterOptions,
            filterColor: filterOptions.filterColor === "blue" ? "" : "blue",
          })
        }
      />
      <Text marginLeft="3px">Blue</Text>
    </Flex>
    <Flex alignItems="center">
      <input
        type="checkbox"
        checked={filterOptions.filterColor === "green"}
        onChange={() =>
          setFilterOptions({
            ...filterOptions,
            filterColor: filterOptions.filterColor === "green" ? "" : "green",
          })
        }
      />
      <Text marginLeft="3px">Green</Text>
    </Flex>
  </Box>

  <Box marginLeft="10px">
    <Text as="label" marginRight="5px">
      Filter Mileage:
    </Text>
    <Flex alignItems="center">
      <input
        type="checkbox"
        checked={filterOptions.filterMileage === "10-20"}
        onChange={() =>
          setFilterOptions({
            ...filterOptions,
            filterMileage: filterOptions.filterMileage === "10-20" ? "" : "10-20",
          })
        }
      />
      <Text marginLeft="3px">10 km/l - 20 km/l</Text>
    </Flex>
    <Flex alignItems="center">
      <input
        type="checkbox"
        checked={filterOptions.filterMileage === "20-60"}
        onChange={() =>
          setFilterOptions({
            ...filterOptions,
            filterMileage: filterOptions.filterMileage === "20-60" ? "" : "20-60",
          })
        }
      />
      <Text marginLeft="3px">20 km/l - 60 km/l</Text>
    </Flex>
    <Flex alignItems="center">
      <input
        type="checkbox"
        checked={filterOptions.filterMileage === "60-100"}
        onChange={() =>
          setFilterOptions({
            ...filterOptions,
            filterMileage: filterOptions.filterMileage === "60-100" ? "" : "60-100",
          })
        }
      />
      <Text marginLeft="3px">60 km/l - 100 km/l</Text>
    </Flex>
  </Box>
  
  <Button onClick={resetFilters} mt={4} ml={4}>
    Reset Filters
  </Button>
</Flex>


        <SimpleGrid
          columns={[1, 1, 2, 2, 3]}
          width={"90%"}
          m="auto"
          mt="10px"
          spacing={8}
        >
          {applyFilters().map((el, ind) => (
            <Text as={"span"} key={ind}>
              <Box>
                <Box
                  height={["45px", "55px", "64px", "64px"]}
                  backgroundColor={"#081839"}
                  textAlign={"center"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text
                    textTransform="capitalize"
                    color={"#F1CC5C"}
                    fontWeight="700"
                    fontSize={["13px", "15px", "15px", "15px", "15px"]}
                  >
                    {el.description}
                  </Text>
                </Box>
                <Box mt={2} textTransform="capitalize">
                  <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing={2}>
                    <Box height="12rem">
                      <Image src={el.image} boxSize="100%" />
                    </Box>
                    <Box height="auto" textTransform="capitalize">
                      <VStack
                        h="100%"
                        justifyContent={[
                          "flex-start",
                          "flex-start",
                          "space-between",
                          "space-between",
                        ]}
                        alignItems="flex-start"
                      >
                        <Text
                          fontSize={["22px", "30px", "23px", "25px", "30px"]}
                          fontWeight="700"
                        >
                          {el.title}
                        </Text>
                        <Text
                          fontSize={["13px", "15px", "15px", "17px", "18px"]}
                          fontWeight="500"
                        >
                          Price - {el.price}
                        </Text>
                        <Text
                          fontSize={["13px", "15px", "15px", "17px", "18px"]}
                          fontWeight="500"
                        >
                          model - {el.model}
                        </Text>
                        <Text
                          fontSize={["13px", "15px", "15px", "17px", "18px"]}
                          fontWeight="500"
                        >
                          color - {el.color}
                        </Text>
                        <Text
                          fontSize={["13px", "15px", "15px", "17px", "18px"]}
                          fontWeight="500"
                        >
                          mileage - {el.mileage}km/l
                        </Text>

                        <HStack
                          w="100%"
                          justifyContent={[
                            "space-between",
                            "space-evenly",
                            "space-around",
                            "space-around",
                          ]}
                          alignItems={"center"}
                        >
                          <Text>
                            {/* {
                                    <DeletePackageModal
                                      id={pac._id}
                                      packName={pac.packageName}
                                    />
                                  } */}
                          </Text>
                          {/* <Text>{<AddTableModal id={pac._id} />}</Text> */}
                        </HStack>
                      </VStack>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Box>
            </Text>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;
