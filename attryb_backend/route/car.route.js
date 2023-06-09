const express = require("express");
const {
  getAllCarData,
  createCardetails,
  updateCardetails,
  deleteCardetails,
  getCardetailsById,
} = require("../controller/car.controller");
const cardetailsRouter = express.Router();

cardetailsRouter.get("/", getAllCarData);
cardetailsRouter.get("/:id", getCardetailsById);
cardetailsRouter.post("/", createCardetails);
cardetailsRouter.put("/:id", updateCardetails);
cardetailsRouter.delete("/:id", deleteCardetails);

module.exports = cardetailsRouter;
