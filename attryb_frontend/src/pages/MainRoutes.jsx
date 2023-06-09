import { Box } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import DealarFormPage from "../DealerSection/DealarFormPage";

const MainRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dealarform" element={<DealarFormPage />} />
      </Routes>
    </Box>
  );
};

export default MainRoutes;
